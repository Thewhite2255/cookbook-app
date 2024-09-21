interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen py-5 flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-800">
      {children}
    </div>
  )
}

export default AuthLayout
