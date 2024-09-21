'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { SettingsSchema } from '@/schemas/auth'
import { getUserByEmail, getUserById } from '@/data/user'
import { db } from '@/lib/db'
import { generateVerificationToken } from '@/data/tokens'
import { sendVerificationEmail } from '@/lib/mail'
import { currentUser } from '@/lib/auth'

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  if (user.isOAuth) {
    values.email = undefined
    values.password = undefined
    values.newPassword = undefined
    values.isTwoFactorEnabled = undefined
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email)

    if (existingUser && existingUser.id !== user.id) {
      return { error: 'Email already in user!' }
    }

    const verificationToken = await generateVerificationToken(values.email)

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )

    return { success: 'Verification email sent!' }
  }

  if (values.password && values.newPassword && dbUser) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password as string
    )

    if (!passwordsMatch) {
      return { error: 'Incorrect password!' }
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10)

    values.password = hashedPassword
    values.newPassword = undefined
  }

  await db.user.update({
    where: {
      id: dbUser.id,
    },
    data: {
      ...values,
      //name: values.name,
      //email: values.email,
      //password: values.password,
      //role: values.role,
      //isTwoFactorEnabled: values.isTwoFactorEnabled,
    },
  })

  return { success: 'Settings updated!' }
}
