'use server'

import { currentUser } from '@/lib/auth'
import { getUserById } from '@/data/auth/user'
import { getNewRecipes } from '@/data/recipe/recipe'

export const getAllNewRecipes = async () => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id as string)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  const recipes = await getNewRecipes()

  return { recipes }
}
