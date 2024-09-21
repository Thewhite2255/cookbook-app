'use server'

import * as z from 'zod'

import { ResetSchema } from '@/schemas/auth'
import { getUserByEmail } from '@/data/auth/user'
import { generatePasswordToken } from '@/data/auth/tokens'
import { sendPasswordResetEmail } from '@/lib/mail'

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid email!' }
  }

  const { email } = validateFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'Email does not exist!' }
  }

  const passwordToken = await generatePasswordToken(email)

  await sendPasswordResetEmail(passwordToken.email, passwordToken.token)

  return { success: 'Reset email sent!' }
}
