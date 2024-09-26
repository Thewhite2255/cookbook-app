'use server'

import * as z from 'zod'

import { AccountSchema } from '@/schemas/auth'
import { db } from '@/lib/db'
import { getUserById } from '@/data/auth/user'
import { currentUser } from '@/lib/auth'

export const deleteAccount = async (values: z.infer<typeof AccountSchema>) => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id as string)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  const validateFields = AccountSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, verifyTyping } = validateFields.data

  if (email && dbUser) {
    if (email !== dbUser.email) {
      return { error: 'Incorrect Email!' }
    }
  }

  if (verifyTyping && verifyTyping.toLowerCase() !== 'delete my account') {
    return { error: 'Typing did not match "delete my account"' }
  }

  await db.user.delete({
    where: {
      email,
    },
  })

  return { success: 'account deleted!' }
}
