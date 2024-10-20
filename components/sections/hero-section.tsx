import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChefHat } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="h-[520px] lg:h-[420px] flex flex-col lg:flex-row w-full mb-8">
      <div className="w-full lg:w-1/2 bg-gray-100/15 wrapper px-8 lg:px-16 lg:py-20 max-lg:order-2">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Discover Delicious Recipes
        </h1>
        <p className="mt-4 text-gray-600 lg:text-lg">
          Explore a world of flavors with our carefully selected recipes.
          Whether you're an experienced chef or a beginner in the kitchen,
          there's something for everyone!
        </p>
        <Button variant="yellow" className="mt-6">
          <Link href="/add-recipe" className="flex items-center gap-2">
            <ChefHat className="w-5 h-5" />
            <span>Start Cooking</span>
          </Link>
        </Button>
      </div>
      <div className="w-full lg:w-1/2 h-full relative flex items-center justify-center max-lg:order-1">
        <Image
          src="/images/good_meal.jpg"
          alt="hero picture"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}

export default HeroSection
