import Image from 'next/image'
import { Heart, Star, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { RecipeType } from '@/constants'

interface RecipeCardProps {
  recipe: RecipeType
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link href={`/recipes/${recipe.slug}-${recipe.id}`}>
      <div className="relative cursor-pointer group/card bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
        <div className="w-full h-[260px]">
          <Image
            src="/images/good_meal.jpg" // Utilise l'image du recette
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 absolute bottom-0 inset-x-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover/card:translate-y-0 bg-black/60">
          <h2 className="text-xl font-bold truncate max-w-full text-white">
            {recipe.title}
          </h2>
          <p className="text-gray-200 mt-2 truncate max-w-full">
            {recipe.description}
          </p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  recipe.ratings && recipe.ratings[0]?.rating > index
                    ? 'text-yellow-500'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-300">
              {recipe.ratings ? recipe.ratings[0]?.rating : 0} / 5
            </span>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center gap-1">
              <ThumbsUp
                className={`w-5 h-5 ${
                  recipe.favorite ? 'text-blue-500' : 'text-gray-300'
                }`}
              />
              <span className="ml-1 text-gray-300">
                {recipe.likes ? recipe.likes : 0}
              </span>
            </div>
            <div className="flex items-center">
              <Heart
                className={`w-5 h-5 ${
                  recipe.favorite ? 'text-red-500' : 'text-gray-300'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
