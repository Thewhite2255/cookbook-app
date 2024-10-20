'use server'

import { currentUser } from '@/lib/auth'
import { getUserById } from '@/data/auth/user'
import { getPopularRecipes } from '@/data/recipe/recipe'

export const getAllPopularRecipes = async () => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id as string)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  const recipes = await getPopularRecipes()

  return { recipes }
}
