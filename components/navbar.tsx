import { MdOutlineLogin } from 'react-icons/md'
import UserButton from '@/components/auth/user-button'
import { Button } from '@/components/ui/button'
import LoginButton from './auth/login-button'
import Link from 'next/link'
import { navbarItems } from '@/constants'
import { Menu } from 'lucide-react'
import { currentUser } from '@/lib/auth'

const Navbar = async () => {
  const user = await currentUser()

  return (
    <header className="bg-white sticky top-0 z-[50]">
      <nav className="flex p-4 shadow-sm w-full justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="flex gap-2">
            <Menu className="w-5 h-5" />
          </Button>
          <Link href="/">
            <div className="font-semibold text-xl">CookBook</div>
          </Link>
        </div>
        {user ? (
          <div className="flex items-center space-x-2">
            {navbarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hidden lg:block"
              >
                <Button variant="ghost" className="flex gap-2">
                  <item.Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="z-[60]">
              <UserButton />
            </div>
          </div>
        ) : (
          <LoginButton>
            <Button variant="ghost" className="flex gap-2">
              <MdOutlineLogin className="w-5 h-5" />
              Sign in
            </Button>
          </LoginButton>
        )}
      </nav>
    </header>
  )
}

export default Navbar
