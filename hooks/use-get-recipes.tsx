'use client'

import { getRecipes } from '@/actions/recipe/get-recipes'
import { useEffect, useState } from 'react'

const useGetRecipes = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      getRecipes()
        .then((data) => setRecipes(data?.recipes))
        .catch(() => console.log('Something went wrong!'))
    }

    fetchRecipes()
  }, [])

  return { recipes, setRecipes }
}

export default useGetRecipes
