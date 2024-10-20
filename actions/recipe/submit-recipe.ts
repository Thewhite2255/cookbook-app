'use server'

import * as z from 'zod'
import { RecipeSchema } from '@/schemas/recipe'
import { db } from '@/lib/db'
import { createSlug } from '@/constants'
import { currentUser } from '@/lib/auth'
import { getUserById } from '@/data/auth/user'

export const submitRecipe = async (values: z.infer<typeof RecipeSchema>) => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id as string)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  const validateFields = RecipeSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { title, description, ingredients, steps, image } = validateFields.data

  const slug = createSlug(title) as string

  await db.recipe.create({
    data: {
      userId: dbUser.id,
      title,
      slug,
      description,
      ingredients,
      steps,
      image,
    },
  })

  return { success: 'Recipe created!' }
}
