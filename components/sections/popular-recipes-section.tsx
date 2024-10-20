'use client'

import useGetPopularRecipes from '@/hooks/use-get-popular-recipes'
import RecipeList from './recipe-list'

const PopularRecipesSection = () => {
  const { recipes } = useGetPopularRecipes()

  return (
    <section className="wrapper">
      <RecipeList
        title="Popular recipes"
        description="The must-haves of the moment! Try the most popular recipes loved by our community."
        list={recipes}
      />
    </section>
  )
}

export default PopularRecipesSection
