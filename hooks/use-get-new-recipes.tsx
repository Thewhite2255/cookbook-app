'use client'

import { getAllNewRecipes } from '@/actions/recipe/get-new-recipes'
import { useEffect, useState } from 'react'

const useGetNewRecipes = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      getAllNewRecipes()
        .then((data) => setRecipes(data?.recipes))
        .catch(() => console.log('Something went wrong!'))
    }

    fetchRecipes()
  }, [])

  return { recipes, setRecipes }
}

export default useGetNewRecipes
