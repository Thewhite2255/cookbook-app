import CategoriesSection from '@/components/sections/categories-section'
import HeroSection from '@/components/sections/hero-section'
import NewRecipesSection from '@/components/sections/new-recipes-section'
import PopularRecipesSection from '@/components/sections/popular-recipes-section'

const HomePage = () => {
  return (
    <section className="flex flex-col space-y-10">
      <HeroSection />
      <PopularRecipesSection />
      <NewRecipesSection />
      <CategoriesSection />
    </section>
  )
}

export default HomePage
