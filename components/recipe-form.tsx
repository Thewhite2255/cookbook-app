'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import { RecipeSchema } from '@/schemas/recipe'
import { useState, useTransition } from 'react'
import { submitRecipe } from '@/actions/recipe/submit-recipe'
import { Textarea } from './ui/textarea'

const RecipeForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<z.infer<typeof RecipeSchema>>({
    resolver: zodResolver(RecipeSchema),
    defaultValues: {
      title: '',
      description: '',
      ingredients: [''],
      steps: [''],
      image: '/images/good_meal.jpg',
    },
  })

  const handleAddIngredient = () => {
    form.setValue('ingredients', [...form.getValues('ingredients'), ''])
  }

  const handleAddStep = () => {
    form.setValue('steps', [...form.getValues('steps'), ''])
  }

  const handleRemoveIngredient = (index: number) => {
    const ingredients = form.getValues('ingredients')
    if (ingredients.length > 1) {
      ingredients.splice(index, 1)
      form.setValue('ingredients', ingredients)
    }
  }

  const handleRemoveStep = (index: number) => {
    const steps = form.getValues('steps')
    if (steps.length > 1) {
      steps.splice(index, 1)
      form.setValue('steps', steps)
    }
  }

  const handleSubmit = (values: z.infer<typeof RecipeSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      submitRecipe(values)
        .then((data) => {
          if (data?.error) {
            setError(data?.error)
          }

          if (data?.success) {
            setSuccess(data?.success)
            form.reset()
          }
        })
        .catch(() => setError('Something went wrong!'))
    })
  }

  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-semibold">Add new recipe</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Recipe Title"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      {...field}
                      disabled={isPending}
                      placeholder="Recipe description"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-muted-foreground">
                    {form.getValues('description').length} / 2000
                  </p>
                </FormItem>
              )}
            />
            <div className="space-y-4">
              <FormLabel>Ingredients</FormLabel>
              {form.watch('ingredients').map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <FormField
                    control={form.control}
                    name={`ingredients.${index}`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder={`Ingredient ${index + 1}`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {form.getValues('ingredients').length > 1 && (
                    <Button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" onClick={handleAddIngredient}>
                Add ingredient
              </Button>
            </div>
            <div className="space-y-4">
              <FormLabel>Steps</FormLabel>
              {form.watch('steps').map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <FormField
                    control={form.control}
                    name={`steps.${index}`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder={`Step ${index + 1}`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.getValues('steps').length > 1 && (
                    <Button
                      type="button"
                      onClick={() => handleRemoveStep(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" onClick={handleAddStep}>
                Add step
              </Button>
            </div>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Recipe Image URL"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" disabled={isPending}>
              Add recipe
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default RecipeForm
