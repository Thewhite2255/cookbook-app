import { Sidebar, SidebarContent, SidebarProvider } from './ui/sidebar'

const AppSidebar = ({ children }) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora
          ratione quod eum numquam modi voluptas quasi dolores ea blanditiis
          illum quae, suscipit officia rerum maxime quisquam, soluta accusamus
          unde.
        </SidebarContent>
      </Sidebar>
      {children}
    </SidebarProvider>
  )
}

export default AppSidebar
