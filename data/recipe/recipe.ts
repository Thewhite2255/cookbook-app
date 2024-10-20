import { db } from '@/lib/db'

export const getAllRecipes = async () => {
  try {
    const recipe = await db.recipe.findMany()

    return recipe
  } catch {
    return null
  }
}

export const getRecipeById = async (id: string) => {
  try {
    const recipe = await db.recipe.findUnique({
      where: {
        id,
      },
    })

    return recipe
  } catch {
    return null
  }
}
