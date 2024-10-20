import { recipesData } from '@/constants'
import RecipeList from './recipe-list'

const CategorySection = () => {
  return (
    <section className="wrapper">
      <RecipeList
        title="Categories"
        description="Explore our recipe categories: from savory to sweet, there's something for everyone!"
        list={recipesData}
      />
    </section>
  )
}

export default CategorySection
