'use client'

import { dashboardItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="sticky inset-y-0 left-0 border-r flex justify-center wrapper">
      <ul className="space-y-2">
        {dashboardItems.length > 0 &&
          dashboardItems.map((item) => (
            <li
              key={item.label}
              className={`${
                pathname === item.href ? 'bg-primary' : 'hover:bg-accent'
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
                  } text-sm sr-only md:not-sr-only`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  )
}

export default Sidebar
