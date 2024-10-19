import { MdOutlineCookie } from 'react-icons/md'

const HeroSection = () => {
  return (
    <section className="h-[220px] lg:h-[420px] flex w-full">
      <div className="w-1/2 bg-gray-100/15 wrapper">Hero Section</div>
      <div className="w-1/2 relative flex items-center justify-center">
        <div className="absolute top-0 left-0 w-1/2 -z-10 h-full bg-black"></div>
        <div className="absolute top-0 right-0 w-1/2 -z-10 h-full bg-blue-500"></div>
        <div className="z-10">
          <MdOutlineCookie className="object-contain w-[220px] h-[220px] text-white" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
