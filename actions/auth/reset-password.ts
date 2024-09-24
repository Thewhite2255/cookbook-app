'use server'

import * as z from 'zod'

import { ResetPasswordSchema } from '@/schemas/auth'
import { getUserByEmail } from '@/data/auth/user'
import { generatePasswordResetToken } from '@/data/auth/tokens'
import { sendPasswordResetEmail } from '@/lib/mail'

export const resetPassword = async (
  values: z.infer<typeof ResetPasswordSchema>
) => {
  const validateFields = ResetPasswordSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid email!' }
  }

  const { email } = validateFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'Email does not exist!' }
  }

  const passwordToken = await generatePasswordResetToken(email)

  await sendPasswordResetEmail(passwordToken.email, passwordToken.token)

  return { success: 'Reset email sent!' }
}
