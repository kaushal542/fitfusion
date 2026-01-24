import { useEffect, useState } from "react"

import hero1 from "../assets/images/hero-1.jpg"
import hero2 from "../assets/images/hero-2.jpg"
import hero3 from "../assets/images/hero-3.jpg"

const slides = [
  {
    image: hero1,
    title: "Be Strong",
    subtitle: "Train Hard"
  },
  {
    image: hero2,
    title: "Stay Fit",
    subtitle: "Stay Healthy"
  },
  {
    image: hero3,
    title: "Build Muscle",
    subtitle: "Build Confidence"
  }
]

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* SLIDER CONTAINER */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            
            {/* IMAGE */}
            <img
              src={slide.image}
              alt="slide"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="relative z-10 h-full flex items-center pt-24 bg-black/60">
              <div className="ml-6 md:ml-20 text-white">
                <p className="uppercase tracking-widest mb-3">
                  Shape your body
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title} <br />
                  <span className="text-orange-500">
                    {slide.subtitle}
                  </span>
                </h1>

                <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
                  Join Now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-orange-500" : "bg-white"
            }`}
          />
        ))}
      </div>

    </div>
  )
}

export default HeroCarousel
