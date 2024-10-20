'use client'

import useGetNewRecipes from '@/hooks/use-get-new-recipes'
import RecipeList from './recipe-list'

const NewRecipesSection = () => {
  const { recipes } = useGetNewRecipes()

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
