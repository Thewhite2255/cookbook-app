import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface backButtonProps {
  label: string
  href: string
}

const BackButton = ({ label, href }: backButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}

export default BackButton
