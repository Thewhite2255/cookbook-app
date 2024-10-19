'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button' // Assurez-vous que le composant Button existe
import { navbarItems } from '@/constants'

const MenuSidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-50 h-full w-64 bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out">
          <button onClick={toggleSidebar} className="mb-4">
            Fermer
          </button>
          <nav className="space-y-4">
            {navbarItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button
                  variant="ghost"
                  className="flex gap-2 w-full justify-start"
                >
                  <item.Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default MenuSidebar
