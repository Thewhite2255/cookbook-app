import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import LogoutButton from './logout-button'
import Link from 'next/link'
import { LogOut, User } from 'lucide-react'
import { userButtonItems } from '@/constants'
import { currentUser } from '@/lib/auth'

const UserButton = async () => {
  const user = await currentUser()

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
      <DropdownMenuContent className="w-[220px]" align="end">
        <DropdownMenuItem className="flex flex-col items-start pointer-events-none">
          <h3 className="text-sm font-semibold">{user?.name}</h3>
          <p className="truncate text-sm max-w-[210px]">{user?.email}</p>
        </DropdownMenuItem>
        <Separator className="my-1" />
        {userButtonItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <DropdownMenuItem className="flex gap-2">
              <item.Icon className="w-5 h-5" />
              {item.label}
            </DropdownMenuItem>
          </Link>
        ))}
        <Separator className="my-1" />
        <LogoutButton>
          <DropdownMenuItem className="flex gap-2">
            <LogOut className="h-5 w-5" />
            Log out
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
