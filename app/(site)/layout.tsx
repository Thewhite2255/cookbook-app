'use client'

import Navbar from '@/components/navbar'
import SearchSection from '@/components/sections/search-section'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar'
import { sidebarItems } from '@/constants'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname()

  const { toggleSidebar } = useSidebar()

  return (
    <>
      <div className="block lg:hidden">
        <Sidebar>
          <SidebarHeader className="bg-white border-b shadow-sm py-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="flex gap-2"
              >
                <X className="w-5 h-5" />
              </Button>
              <Link href="/">
                <div className="font-semibold text-xl">CookBook</div>
              </Link>
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-white">
            <SidebarGroup>
              <ul className="space-y-2">
                {sidebarItems.length > 0 &&
                  sidebarItems.map((item) => (
                    <li
                      key={item.label}
                      className={`${
                        pathname === item.href
                          ? 'bg-primary'
                          : 'hover:bg-accent'
                      } rounded-lg cursor-pointer`}
                    >
                      <Link
                        href={item.href}
                        className={`flex flex-row gap-2 p-2 items-center`}
                      >
                        <item.Icon
                          className={`${
                            pathname === item.href && 'text-gray-100'
                          } w-5 h-5`}
                        />
                        <span
                          className={`${
                            pathname === item.href && 'text-gray-100'
                          } text-sm`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                <SearchSection />
              </ul>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </>
  )
}
