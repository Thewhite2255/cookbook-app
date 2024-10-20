import CategorySection from '@/components/sections/category-section'
import HeroSection from '@/components/sections/hero-section'
import NewRecipesSection from '@/components/sections/new-recipe-section'
import PopularRecipesSection from '@/components/sections/popularRecipes'

const HomePage = () => {
  return (
    <section className="flex flex-col space-y-10">
      <HeroSection />
      <PopularRecipesSection />
      <NewRecipesSection />
      <CategorySection />
    </section>
  )
}

export default HomePage
