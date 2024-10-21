'use client'

import { MdOutlineLogin } from 'react-icons/md'
import UserButton from '@/components/auth/user-button'
import { Button } from '@/components/ui/button'
import LoginButton from './auth/login-button'
import Link from 'next/link'
import { navbarItems } from '@/constants'
import { Menu } from 'lucide-react'
import useCurrentUser from '@/hooks/use-current-user'
import { useSidebar } from './ui/sidebar'
import SearchSection from './sections/search-section'
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'

const Navbar = () => {
  const user = useCurrentUser()

  const { toggleSidebar } = useSidebar()

  return (
    <div className="bg-white sticky top-0 z-[50]">
      <nav className="flex p-4 shadow-sm border-b w-full justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="flex gap-2 lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <Link href="/">
            <div className="font-semibold text-xl">CookBook</div>
          </Link>
        </div>
        {user ? (
          <div className="flex items-center space-x-2">
            <div className="hidden lg:block">
              <SearchSection />
            </div>
            {navbarItems.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger>
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hidden lg:block"
                  >
                    <Button variant="ghost" size="icon" className="flex gap-2">
                      <item.Icon className="w-5 h-5" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{item.label}</TooltipContent>
              </Tooltip>
            ))}
            <UserButton />
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
    </div>
  )
}

export default Navbar
