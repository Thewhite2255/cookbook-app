'use client'

import { getRecipe } from '@/actions/recipe/get-recipe'
import { useEffect, useState } from 'react'

const useGetRecipe = ({ id }: { id: string }) => {
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      getRecipe(id)
        .then((data) => setRecipe(data?.recipe))
        .catch(() => console.log('Something went wrong!'))
    }

    fetchRecipe()
  }, [])

  return { recipe, setRecipe }
}

export default useGetRecipe
