'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { FaUser } from 'react-icons/fa'
import useCurrentUser from '@/hooks/use-current-user'
import LogoutButton from './logout-button'

import {
  MdOutlineDashboard,
  MdOutlineLogout,
  MdOutlineSettings,
} from 'react-icons/md'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import LoginButton from './login-button'
import { ExtendedUser } from '@/next-auth'
import { LayoutDashboard, User } from 'lucide-react'
import { userButtonItems } from '@/constants'

const UserButton = () => {
  const user = useCurrentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback className="bg-blue-500">
            <User className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      {user && (
        <DropdownMenuContent className="w-[220px]" align="end">
          <div className="flex flex-col items-start relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none">
            <h3 className="text-sm font-semibold">{user?.name}</h3>
            <p className="truncate max-w-[210px]">{user?.email}</p>
          </div>
          <Separator className="mb-1" />
          {userButtonItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <DropdownMenuItem className="flex gap-2">
                <item.Icon className="w-5 h-5" />
                {item.label}
              </DropdownMenuItem>
            </Link>
          ))}
          <Separator className="mb-1" />
          <LogoutButton>
            <DropdownMenuItem className="flex gap-2">
              <MdOutlineLogout className="h-5 w-5" />
              Log out
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}

export default UserButton
