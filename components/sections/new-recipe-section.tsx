'use client'

import RecipeList from './recipe-list'
import { useEffect, useState } from 'react'
import { getRecipes } from '@/actions/recipe/get-recipes'

const NewRecipesSection = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      getRecipes()
        .then((data) => setRecipes(data?.recipes))
        .catch(() => console.log('Something went wrong!'))
    }

    fetchRecipes()
  }, [])

  return (
    <section className="wrapper">
      <RecipeList
        title="New recipes"
        description="Fresh-from-the-oven novelties! Discover our latest culinary creations."
        list={recipes}
      />
    </section>
  )
}

export default NewRecipesSection
