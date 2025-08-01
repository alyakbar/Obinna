"use client"

import { useState, useEffect, useRef } from "react"
import { Check, Star } from "lucide-react"

export function ServicePackages() {
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

  const packages = [
    {
      name: "Essential",
      price: "KSh 75,000",
      duration: "Half Day Event",
      description: "Perfect for smaller events and intimate gatherings",
      features: [
        "4-hour event hosting",
        "Professional MC services",
        "Basic sound system coordination",
        "Event timeline management",
        "Post-event consultation",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "KSh 150,000",
      duration: "Full Day Event",
      description: "Comprehensive entertainment package for major events",
      features: [
        "8-hour event hosting",
        "MC + Comedy performance",
        "Sound system coordination",
        "Event planning consultation",
        "Social media coverage",
        "Custom content creation",
        "VIP meet & greet",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "KSh 300,000",
      duration: "Multi-Day Package",
      description: "Ultimate entertainment experience for premium events",
      features: [
        "Multi-day event coverage",
        "Full entertainment package",
        "Brand partnership integration",
        "Custom content creation",
        "Professional photography",
        "Social media management",
        "Exclusive merchandise",
        "VIP experience package",
      ],
      popular: false,
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Service Packages
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose the perfect package for your event needs, from intimate gatherings to large-scale productions
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"} ${
                pkg.popular ? "transform scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div
                className={`luxury-card p-6 sm:p-8 h-full ${
                  pkg.popular ? "border-2 border-amber-500 shadow-glow" : ""
                }`}
              >
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">{pkg.price}</div>
                  <div className="text-sm text-gray-600 mb-4">{pkg.duration}</div>
                  <p className="text-gray-600 text-sm sm:text-base">{pkg.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[48px] ${
                    pkg.popular
                      ? "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500"
                      : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900"
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="luxury-card p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-dm-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Need Something Custom?</h3>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Every event is unique. Let's create a personalized package that perfectly fits your vision and budget.
            </p>
            <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 min-h-[48px] inline-flex items-center">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
