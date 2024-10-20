'use server'

import { currentUser } from '@/lib/auth'
import { getUserById } from '@/data/auth/user'
import { getRecipeById } from '@/data/recipe/recipe'

export const getRecipe = async (slug: string) => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id as string)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  const id = slug.split('-').splice(-1)[0]

  const recipe = await getRecipeById(id as string)

  return { recipe }
}
