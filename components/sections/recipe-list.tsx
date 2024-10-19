'use client'

import { useState, useTransition } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { MdOutlineClose, MdOutlineSearch } from 'react-icons/md'
import RecipeCard from '../recipe-card'
import { Search } from 'lucide-react'

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showCleanSearchBtn, setCleanSearchBtn] = useState(false)
  const [isPending, Transition] = useTransition()

  const handleCleanSearch = () => {
    setSearchTerm('')
  }

  const recipeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <section className="flex flex-col gap-6 wrapper">
      <div>
        <h2 className="font-semibold mb-4 text-2xl leading-normal">
          Recipes list
        </h2>
        <div>
          <div className="relative">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isPending}
              className="px-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center justify-center p-3">
              <Button
                size="sm"
                variant={null}
                asChild
                onClick={handleCleanSearch}
                className="px-0 font-normal cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
            {searchTerm !== '' && (
              <div className="absolute inset-y-0 right-0 flex items-center justify-center p-3">
                <Button
                  size="sm"
                  variant={null}
                  asChild
                  onClick={handleCleanSearch}
                  className="px-0 font-normal cursor-pointer"
                >
                  <MdOutlineClose className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipeList.length > 0 && recipeList.map((i) => <RecipeCard />)}
      </div>
    </section>
  )
}

export default RecipeList
