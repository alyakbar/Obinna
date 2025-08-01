"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Clock, Eye, ExternalLink } from "lucide-react"

export function MediaGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
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

  const categories = [
    { id: "all", name: "All Content" },
    { id: "comedy", name: "Comedy" },
    { id: "radio", name: "Radio Shows" },
    { id: "interviews", name: "Interviews" },
  ]

  const mediaItems = [
    {
      id: 1,
      category: "comedy",
      title: "Latest Comedy Special - Nairobi Nights",
      description: "Hilarious stand-up performance from Nairobi Comedy Club featuring the best of Kenyan humor",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "15:32",
      views: "125K",
      type: "video",
    },
    {
      id: 2,
      category: "radio",
      title: "Morning Show Highlights",
      description: "Best moments from the morning radio show featuring celebrity interviews and comedy segments",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "8:45",
      views: "89K",
      type: "video",
    },
    {
      id: 3,
      category: "interviews",
      title: "Behind the Scenes with Oga Obinna",
      description: "Exclusive look at the content creation process and daily life of East Africa's top entertainer",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "12:18",
      views: "203K",
      type: "video",
    },
    {
      id: 4,
      category: "comedy",
      title: "Cultural Comedy - East Meets West",
      description: "Cross-cultural comedy exploring the funny side of Kenyan-Nigerian experiences",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "18:45",
      views: "156K",
      type: "video",
    },
    {
      id: 5,
      category: "radio",
      title: "Celebrity Interview Series",
      description: "In-depth conversations with East Africa's biggest stars and personalities",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "25:30",
      views: "94K",
      type: "video",
    },
    {
      id: 6,
      category: "interviews",
      title: "The Making of Obinna TV",
      description: "Documentary-style content showing the evolution of the YouTube channel and brand",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "22:15",
      views: "178K",
      type: "video",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? mediaItems : mediaItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="media" ref={sectionRef} className="section-padding bg-slate-900">
      <div className="container-max">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            Media Gallery
          </div>

          <h2 className="font-dm-serif text-4xl lg:text-6xl font-bold text-white mb-6">
            Premium <span className="gradient-text">Content</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Dive into a world of entertainment with exclusive videos, behind-the-scenes content, and premium media
            experiences from Oga Obinna's extensive portfolio.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-amber-500 text-slate-900 shadow-glow"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-amber-400"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group premium-card overflow-hidden cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-500/30">
                      <Play className="w-8 h-8 text-amber-400 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {item.duration}
                </div>

                {/* Views badge */}
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {item.views}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">{item.description}</p>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </span>

                  <button className="inline-flex items-center text-amber-400 text-sm font-medium group-hover:text-amber-300 transition-colors duration-300">
                    Watch Now
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:scale-110" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <button className="btn-secondary">View All Content</button>
        </div>
      </div>
    </section>
  )
}
