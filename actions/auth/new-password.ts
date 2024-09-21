'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { NewPasswordSchema } from '@/schemas/auth'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/data/tokens'
import { sendPasswordResetEmail } from '@/lib/mail'
import { getPasswordTokenByToken } from '@/data/password-reset-token'
import { db } from '@/lib/db'

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: 'Missing token!' }
  }

  const validateFields = NewPasswordSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { password } = validateFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingToken = await getPasswordTokenByToken(token)

  if (!existingToken) {
    return { error: 'Invalid token!' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Token has expired!' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'Email does not exist!' }
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },

    data: {
      password: hashedPassword,
      email: existingToken.email,
    },
  })

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  })

  return { success: 'Password updated!' }
}
