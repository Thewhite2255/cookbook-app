'use server'

import * as z from 'zod'

import { DeleteAccountSchema } from '@/schemas/auth'
import { db } from '@/lib/db'
import { getUserById } from '@/data/auth/user'
import { currentUser } from '@/lib/auth'

export const deleteAccount = async (
  values: z.infer<typeof DeleteAccountSchema>
) => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id as string)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  const validateFields = DeleteAccountSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email } = validateFields.data

  if (email && dbUser) {
    if (email !== dbUser.email) {
      return { error: 'Incorrect Email!' }
    }
  }

  await db.user.delete({
    where: {
      email,
    },
  })

  return { success: 'account deleted!' }
}
