'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MdOutlineMenu } from 'react-icons/md'
import UserButton from '@/components/auth/user-button'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-50 flex p-4 shadow-sm w-full justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MdOutlineMenu className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[220px]" align="start">
          <Link href="/">
            <DropdownMenuItem className="flex gap-2">Home</DropdownMenuItem>
          </Link>
          <Link href="/server">
            <DropdownMenuItem className="flex gap-2">Server</DropdownMenuItem>
          </Link>
          <Link href="/client">
            <DropdownMenuItem className="flex gap-2">Client</DropdownMenuItem>
          </Link>
          <Link href="/admin">
            <DropdownMenuItem className="flex gap-2">Admin</DropdownMenuItem>
          </Link>
          <Link href="/settings">
            <DropdownMenuItem className="flex gap-2">Settings</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex gap-x-2 max-sm:hidden">
        <Button asChild variant={pathname === '/' ? 'default' : 'outline'}>
          <Link href="/">Home</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === '/admin' ? 'default' : 'outline'}>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}

export default Navbar
