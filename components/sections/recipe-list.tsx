'use client'

import { RecipeType } from '@/constants'
import RecipeCard from '../recipe-card'

interface RecipeListProps {
  title: string
  description: string
  list: RecipeType[]
}

const RecipeList = ({ title, description, list }: RecipeListProps) => {
  return (
    <section className="flex flex-col gap-8 wrapper">
      <div>
        <h2 className="font-semibold mb-4 text-2xl leading-normal">{title}</h2>
        <p className=" text-muted-foreground">{description}</p>
      </div>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list && list.map((item) => <RecipeCard key={item.id} recipe={item} />)}
      </div>
    </section>
  )
}

export default RecipeList
