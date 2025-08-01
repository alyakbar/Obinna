"use client"

import { useState, useEffect, useRef } from "react"
import { Quote } from "lucide-react"

export function Testimonials() {
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

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Event Director",
      company: "Nairobi Events Co.",
      content:
        "Oga Obinna transformed our corporate event into an unforgettable experience. His professionalism and humor created the perfect atmosphere.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Ochieng",
      role: "Brand Manager",
      company: "East Africa Marketing",
      content:
        "Working with Oga Obinna exceeded all expectations. His authentic connection with audiences delivered results beyond our KPIs.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Grace Wanjiku",
      role: "Radio Producer",
      company: "Capital FM Kenya",
      content:
        "Obinna's radio presence is magnetic. He brings intelligence, humor, and genuine entertainment value that keeps listeners engaged.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`card p-6 sm:p-8 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-4" />
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
