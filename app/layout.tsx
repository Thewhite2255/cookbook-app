import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SiteConfig } from '@/lib/site-config'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { Toaster } from 'sonner'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  keywords: [...SiteConfig.keywords],
  authors: [...SiteConfig.authors],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang="en">
      <body>
        <Toaster />
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
