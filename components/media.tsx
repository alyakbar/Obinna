"use client"

import { useState, useEffect, useRef } from "react"
import { Play, ExternalLink } from "lucide-react"

export function Media() {
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

  const mediaItems = [
    {
      title: "Latest Comedy Special",
      description: "Hilarious stand-up performance from Nairobi Comedy Club",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce85d23e-64b0-43d7-8e7e-717124ce52e9-PDsZEWDxSJnVVQDrXsRqGILYGEaY9Y.webp",
      type: "video",
    },
    {
      title: "Radio Show Highlights",
      description: "Best moments from morning radio show",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GdkpCxrXIAA3zT5-UmUTQot0yvk9Y5uUhMJXebPqEyeKpb.jpeg",
      type: "video",
    },
    {
      title: "Behind the Scenes",
      description: "Exclusive look at content creation process",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oga-Obinna-Igiza-660x400-lRMC1NzktOOjesdP7exvXMV6QwYPBu.jpeg",
      type: "video",
    },
    {
      title: "Event Hosting",
      description: "Premium MC services in action",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1eb760c-8215-404e-99ff-794fbf175640.jpg-UqqvtH9z62b8u6LyDMzORcbF9d2RGx.jpeg",
      type: "video",
    },
    {
      title: "Brand Collaborations",
      description: "Working with leading East African brands",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/168268816841802.jpg-H7VM1j0WYe7C4Yp4ZoC8IO1arZiNU5.jpeg",
      type: "video",
    },
    {
      title: "Cultural Content",
      description: "Bridging Kenyan and Nigerian cultures",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720.jpg-yk19w9F0uCOrPAxCaEyb4pCjfGe24W.jpeg",
      type: "video",
    },
  ]

  return (
    <section id="media" ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Media Highlights
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore exclusive content, behind-the-scenes moments, and premium entertainment experiences
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mediaItems.map((item, index) => (
            <div
              key={item.title}
              className={`card overflow-hidden group cursor-pointer transition-all duration-800 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <picture>
                  <source media="(max-width: 768px)" srcSet={`${item.thumbnail}?w=400&h=250&fit=crop`} />
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center text-gray-900 text-sm sm:text-base font-medium">
                  Watch Now
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
