import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="h-[220px] lg:h-[420px] flex w-full">
      <div className="w-1/2 bg-gray-100/15 wrapper">Hero Section</div>
      <div className="w-1/2 relative flex items-center justify-center">
        <div className="z-10">
          <div className="w-full h-[220px]">
            <Image
              src="/images/good_meal.jpg"
              alt="hero picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
