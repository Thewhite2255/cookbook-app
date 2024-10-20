'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Star, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Rating {
  userId: string // ID of the user who gave the rating
  rating: number // Rating from 1 to 5
}

interface Comment {
  userId: string // ID of the user who commented
  text: string // Comment text
}

interface Recipe {
  title: string // Recipe title
  description: string // Recipe description
  image: string // Recipe image URL
  slug: string // Recipe slug for the URL
  ratings: Rating[] // Array of ratings
  favorite: boolean // Indicates if the recipe is marked as favorite
  likes: number // Number of likes
  comments: Comment[] // Array of comments
}

const RecipePage = () => {
  const { slug } = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(false)
  const [commentText, setCommentText] = useState('')

  // Fetch recipe data based on slug
  useEffect(() => {
    const fetchRecipe = async () => {
      if (slug) {
        const res = await fetch(`/api/recipes/${slug}`) // Adjust the API endpoint as necessary
        const data = await res.json()
        setRecipe(data)
        setLoading(false)
      }
    }
    fetchRecipe()
  }, [slug])

  // Handle like button click
  const handleLike = () => {
    if (recipe) {
      // Increment likes logic here
      setRecipe({ ...recipe, likes: recipe.likes + 1 })
    }
  }

  // Handle favorite button click
  const handleFavorite = () => {
    if (recipe) {
      setRecipe({ ...recipe, favorite: !recipe.favorite })
    }
  }

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (recipe && commentText) {
      const newComment = {
        userId: 'currentUserId', // Replace with actual user ID
        text: commentText,
      }
      setRecipe({
        ...recipe,
        comments: [...recipe.comments, newComment],
      })
      setCommentText('') // Clear the comment input
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
                  index < recipe.ratings[0]?.rating
                    ? 'text-yellow-500'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-700">
              {recipe.ratings[0]?.rating || '0'} / 5
            </span>
          </div>

          <div className="flex items-center mt-4 space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200"
            >
              <ThumbsUp className="w-5 h-5" />
              <span className="ml-1">{recipe.likes}</span>
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
              {recipe.comments.map((comment, index) => (
                <div key={index} className="mt-2 border-b pb-2">
                  <p className="font-semibold">User {comment.userId}</p>
                  <p className="text-gray-600">{comment.text}</p>
                </div>
              ))}
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
