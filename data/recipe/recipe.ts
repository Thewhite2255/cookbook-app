import { RatingRecipeType } from '@/constants'
import { db } from '@/lib/db'

export const getAllRecipes = async () => {
  try {
    const recipes = await db.recipe.findMany({
      include: {
        likes: true,
        ratings: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return recipes
  } catch {
    return null
  }
}

export const getPopularRecipes = async () => {
  try {
    const recipes = await db.recipe.findMany({
      include: {
        likes: true,
        ratings: true,
      },
      where: {
        likes: {
          some: {},
        },
      },
      orderBy: {
        likes: {
          _count: 'desc',
        },
      },
      take: 10,
    })

    return recipes
  } catch {
    return null
  }
}

export const getNewRecipes = async () => {
  try {
    const recipes = await db.recipe.findMany({
      include: {
        likes: true,
        ratings: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
    })

    return recipes
  } catch {
    return null
  }
}

//export const getRecipesByCategory = async (category: string) => {
//  try {
//    const recipes = await db.recipe.findMany({
//      where: {
//        category: category,
//      },
//    });
//
//    return recipes;
//  } catch {
//    return null;
//  }
//}

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

export const calculateAverageRating = (ratings: RatingRecipeType[]) => {
  if (!ratings || ratings.length === 0) return 0 // Si aucune évaluation, retourner 0

  const totalRating = ratings.reduce((total, { value }) => total + value, 0) // Calculer la somme des évaluations
  return totalRating / ratings.length // Retourner la moyenne
}
