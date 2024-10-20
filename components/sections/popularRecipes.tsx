import { recipesData } from '@/constants'
import RecipeList from './recipe-list'

const PopularRecipesSection = () => {
  return (
    <section className="wrapper">
      <RecipeList
        title="Popular recipes"
        description="The must-haves of the moment! Try the most popular recipes loved by our community."
        list={recipesData}
      />
    </section>
  )
}

export default PopularRecipesSection
