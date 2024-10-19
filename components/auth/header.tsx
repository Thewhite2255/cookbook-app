import { cn } from '@/lib/utils'

interface HeaderProps {
  title?: string
  label?: string
}

const Header = ({ title, label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className={cn('text-xl font-semibold')}>{title}</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export default Header
