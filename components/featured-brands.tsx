"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export function FeaturedBrands() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const brands = [
    {
      name: "Zinco Mabati",
      logo: "/placeholder.svg?height=80&width=200&text=Zinco+Mabati",
      description: "Premium roofing solutions partner",
    },
    {
      name: "Mozzart",
      logo: "/placeholder.svg?height=80&width=200&text=Mozzart",
      description: "Leading entertainment platform partnership",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Trusted by <span className="gradient-text">Leading Brands</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Partnering with premium brands across East Africa to deliver authentic and impactful campaigns
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="luxury-card p-8 sm:p-10 text-center h-full flex flex-col items-center justify-center">
                {/* Brand Logo Placeholder */}
                <div className="w-full h-20 sm:h-24 mb-6 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Brand Name */}
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {brand.name}
                </h3>

                {/* Brand Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{brand.description}</p>

                {/* Hover Effect Indicator */}
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="luxury-card p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-dm-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Join leading brands who trust Oga Obinna for authentic storytelling and premium audience engagement.
            </p>
            <Link
              href="/services"
              className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 min-h-[48px] inline-flex items-center"
            >
              Explore Partnerships
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
