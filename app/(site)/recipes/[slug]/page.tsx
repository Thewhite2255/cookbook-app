'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Star, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getRecipe } from '@/actions/recipe/get-recipe'
import { calculateAverageRating } from '@/data/recipe/recipe'
import { RecipeType } from '@/constants'

const RecipePage = () => {
  const { slug } = useParams()

  const [recipe, setRecipe] = useState<RecipeType | null>(null)
  const [loading, setLoading] = useState(true)
  const [commentText, setCommentText] = useState('')

  const averageRating = calculateAverageRating(recipe?.ratings || [])

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipe(slug)
        setRecipe(data?.recipe)
      } catch (error) {
        console.error('Something went wrong!', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipe()
  }, [slug])

  const handleLike = () => {
    if (recipe) {
      setRecipe({ ...recipe, likes: recipe.likes + 1 })
    }
  }

  const handleFavorite = () => {
    if (recipe) {
      setRecipe({ ...recipe, favorite: !recipe.favorite })
    }
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (recipe && commentText.trim()) {
      const newComment = {
        userId: 'currentUserId', // Remplace par l'ID utilisateur actuel
        text: commentText.trim(),
      }
      setRecipe({
        ...recipe,
        comments: [...recipe.comments, newComment],
      })
      setCommentText('')
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      {recipe ? (
        <>
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          <div className="relative w-full h-64 my-4">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-700">{recipe.description}</p>

          <div className="flex items-center mt-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  averageRating > index ? 'text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-700">
              {averageRating.toFixed(2)} / 5
            </span>
          </div>

          <div className="flex items-center mt-4 space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200"
            >
              <ThumbsUp className="w-5 h-5" />
              <span className="ml-1">
                {recipe.likes ? recipe.likes.length : 0}
              </span>
            </button>
            <button
              onClick={handleFavorite}
              className={`flex items-center ${
                recipe.favorite ? 'text-red-500' : 'text-gray-700'
              } hover:text-red-600 transition duration-200`}
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mt-4">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Leave a comment..."
                rows={3}
                required
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </form>
            <div className="mt-4">
              {recipe.comments?.length > 0 ? (
                recipe.comments.map((comment, index) => (
                  <div key={index} className="mt-2 border-b pb-2">
                    <p className="font-semibold">User {comment.userId}</p>
                    <p className="text-gray-600">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Recipe not found.</p>
      )}
      <Link href="/recipes">
        <button className="mt-8 px-4 py-2 bg-gray-300 rounded-md">
          Back to Recipes
        </button>
      </Link>
    </div>
  )
}

export default RecipePage
