'use server'

import * as z from 'zod'
import { RecipeSchema } from '@/schemas/recipe'
import { currentUser } from '@/lib/auth'
import { getUserById } from '@/data/auth/user'
import { getAllRecipes } from '@/data/recipe/recipe'

export const getRecipes = async () => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id as string)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  const recipes = await getAllRecipes()

  return { recipes }
}
