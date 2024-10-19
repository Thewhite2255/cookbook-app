import Navbar from '@/components/navbar'

interface SiteLayoutProps {
  children: React.ReactNode
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
