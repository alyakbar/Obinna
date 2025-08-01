"use client"

import { useState, useEffect, useRef } from "react"
import { Play, ExternalLink } from "lucide-react"

export function YouTubeSection() {
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

  const featuredVideos = [
    {
      id: "1",
      title: "Latest Comedy Special - Nairobi Nights",
      description: "Hilarious stand-up performance from Nairobi Comedy Club featuring the best of Kenyan humor",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce85d23e-64b0-43d7-8e7e-717124ce52e9-PDsZEWDxSJnVVQDrXsRqGILYGEaY9Y.webp",
      duration: "15:32",
      views: "125K",
      embedId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    },
    {
      id: "2",
      title: "Behind the Scenes - Content Creation",
      description: "Exclusive look at the content creation process and daily life of East Africa's top entertainer",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oga-Obinna-Igiza-660x400-lRMC1NzktOOjesdP7exvXMV6QwYPBu.jpeg",
      duration: "12:18",
      views: "203K",
      embedId: "dQw4w9WgXcQ", // Placeholder YouTube ID
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
            Featured <span className="gradient-text">YouTube Content</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Watch the latest videos from Obinna TV, featuring comedy, behind-the-scenes content, and exclusive
            interviews
          </p>
        </div>

        {/* Featured Videos */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {featuredVideos.map((video, index) => (
            <div
              key={video.id}
              className={`transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="luxury-card overflow-hidden">
                {/* Video Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3">{video.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="luxury-card p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-dm-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Subscribe to Obinna TV</h3>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Join 500K+ subscribers for weekly comedy content, behind-the-scenes videos, and exclusive interviews.
            </p>
            <a
              href="https://youtube.com/@obinnatv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[48px] inline-flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Subscribe Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
