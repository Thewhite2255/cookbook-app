import Sidebar from '@/components/sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="flex flex-row">
      <Sidebar />
      <main className="flex-1 wrapper">{children}</main>
    </section>
  )
}

export default DashboardLayout
