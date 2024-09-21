import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = async ({ children }: ProvidersProps) => {
  const session = await auth()

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        <SessionProvider session={session}>{children}</SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default Providers
