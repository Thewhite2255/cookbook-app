import Navbar from './_components/navbar'

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1 px-4 py-6 lg:py-12">{children}</div>
    </div>
  )
}
