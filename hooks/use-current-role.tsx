'use client'

import { useSession } from 'next-auth/react'

const useCurrentRole = () => {
  const { data: session } = useSession()

  return session?.user?.role
}

export default useCurrentRole
