"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Play, ExternalLink, ArrowRight } from "lucide-react"

export function MediaPreview() {
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
      type: "video",
      title: "Latest Comedy Special",
      description: "Hilarious stand-up performance from Nairobi Comedy Club",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "15:32",
    },
    {
      type: "video",
      title: "Radio Show Highlights",
      description: "Best moments from morning radio show",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "8:45",
    },
    {
      type: "video",
      title: "Behind the Scenes",
      description: "Exclusive look at content creation process",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "12:18",
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Media Gallery</span>
          <h2 className="font-dm-serif text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 text-balance">
            Premium Content &<span className="gradient-text"> Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Dive into a world of entertainment with exclusive videos, behind-the-scenes content, and premium media
            experiences.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mediaItems.map((item, index) => (
            <div
              key={item.title}
              className={`luxury-card overflow-hidden group cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center text-purple-600 text-sm font-medium">
                  Watch Now
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Link href="/media" className="btn-primary group">
            View All Media
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
