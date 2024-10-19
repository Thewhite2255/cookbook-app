import HeroSection from '@/components/sections/hero-section'
import RecipeList from '@/components/sections/recipe-list'

const HomePage = () => {
  return (
    <section className="flex flex-col space-y-10">
      <HeroSection />
      <RecipeList />
    </section>
  )
}

export default HomePage
