import Navbar from './(protected)/_components/navbar'

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1 px-4 py-6 lg:py-12">
        <div className="flex items-center justify-center mx-auto max-w-screen-md">
          Home
        </div>
      </div>
    </div>
  )
}

export default HomePage
