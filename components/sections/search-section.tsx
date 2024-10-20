import { Search, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isPending, Transition] = useTransition()

  const handleCleanSearch = () => {
    setSearchTerm('')
  }
  return (
    <section className="wrapper">
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
              <X className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchSection
