import * as z from 'zod'

export const RecipeSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' }),
  ingredients: z
    .array(z.string())
    .min(1, { message: 'At least one ingredient is required' }),
  steps: z
    .array(z.string())
    .min(1, { message: 'At least one step is required' }),
  image: z.string().min(1, { message: 'Image URL is required' }),
})
