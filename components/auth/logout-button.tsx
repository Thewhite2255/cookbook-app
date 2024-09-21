'use client'

import { logout } from '@/actions/auth/logout'
import { useRouter } from 'next/navigation'

interface LogoutButtonProps {
  children: React.ReactNode
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    logout().then(() => {
      router.push('/auth/login')
    })
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  )
}

export default LogoutButton
