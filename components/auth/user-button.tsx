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

import { MdOutlineLogout, MdOutlineSettings } from 'react-icons/md'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const UserButton = () => {
  const user = useCurrentUser()
  const session = useSession()
  const isAuthentificated = session?.status === 'authenticated' ? true : false

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      {isAuthentificated && (
        <DropdownMenuContent className="w-[220px]" align="end">
          <div className="flex flex-col items-start relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none">
            <h3 className="text-sm font-semibold">{user?.name}</h3>
            <p className="truncate max-w-[210px]">{user?.email}</p>
          </div>
          <Separator className="mb-1" />
          <Link href="/settings">
            <DropdownMenuItem className="flex gap-2">
              <MdOutlineSettings className="h-5 w-5" />
              Settings
            </DropdownMenuItem>
          </Link>
          <LogoutButton>
            <DropdownMenuItem className="flex gap-2">
              <MdOutlineLogout className="h-5 w-5" />
              Logout
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      )}
      {!isAuthentificated && (
        <DropdownMenuContent className="w-[220px]" align="end">
          <Link href="/auth/login">
            <DropdownMenuItem className="flex gap-2">
              <MdOutlineSettings className="h-5 w-5" />
              Sign in
            </DropdownMenuItem>
          </Link>
          <Link href="/auth/register">
            <DropdownMenuItem className="flex gap-2">
              <MdOutlineSettings className="h-5 w-5" />
              Sign up
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}

export default UserButton
