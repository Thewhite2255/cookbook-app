'use client'

import { getAllPopularRecipes } from '@/actions/recipe/get-popular-recipes'
import { useEffect, useState } from 'react'

const useGetPopularRecipes = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      getAllPopularRecipes()
        .then((data) => {
          setRecipes(data?.recipes)
          console.log(data?.recipes)
        })
        .catch(() => console.log('Something went wrong!'))
    }

    fetchRecipes()
  }, [])

  return { recipes, setRecipes }
}

export default useGetPopularRecipes
