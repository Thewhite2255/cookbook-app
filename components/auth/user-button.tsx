'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { FaUser } from 'react-icons/fa'
import useCurrentUser from '@/hooks/use-current-user'
import LogoutButton from './logout-button'

import { MdOutlineLogout, MdOutlineSettings } from 'react-icons/md'
import Link from 'next/link'

const UserButton = () => {
  const user = useCurrentUser()

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
      <DropdownMenuContent className="w-[220px]" align="end">
        <DropdownMenuItem className="flex flex-col items-start">
          <h3 className="text-sm font-semibold">{user?.name}</h3>
          <p className="truncate max-w-[210px]">{user?.email}</p>
        </DropdownMenuItem>
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
    </DropdownMenu>
  )
}

export default UserButton
