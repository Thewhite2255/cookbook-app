'use client'

import useGetNewRecipes from '@/hooks/use-get-new-recipes'
import RecipeList from './recipe-list'

const CategoriesSection = () => {
  const { recipes } = useGetNewRecipes()

  return (
    <section className="wrapper">
      <RecipeList
        title="Categories"
        description="Explore our recipe categories: from savory to sweet, there's something for everyone!"
        list={recipes}
      />
    </section>
  )
}

export default CategoriesSection
