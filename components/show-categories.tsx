"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Clock, Eye, ExternalLink, Filter } from "lucide-react"

export function ShowCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("obinna-show")
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
    {
      id: "obinna-show",
      name: "The Obinna Show",
      description: "Premium talk show featuring celebrity interviews and trending conversations",
      color: "from-purple-600 to-blue-600",
    },
    {
      id: "obinna-show-extra",
      name: "The Obinna Show Extra",
      description: "Extended content and behind-the-scenes moments from the main show",
      color: "from-pink-600 to-purple-600",
    },
    {
      id: "obinnaz",
      name: "The Obinnaz",
      description: "Comedy sketches and entertainment content with the Obinna crew",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "zabe",
      name: "Zabe",
      description: "Cultural content exploring East African lifestyle and traditions",
      color: "from-green-600 to-teal-600",
    },
  ]

  const showContent = {
    "obinna-show": [
      {
        id: 1,
        title: "Celebrity Interview Special",
        description: "Exclusive conversation with East Africa's biggest stars in our premium studio setting",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9c87bfcb-cce1-4713-b55e-e62a7a8988c1.JPG-b3rEGtAxFoHE188imu9YIAX1lPJvkl.jpeg",
        duration: "45:32",
        views: "250K",
        type: "Interview",
      },
      {
        id: 2,
        title: "Behind the Scenes Studio Tour",
        description: "Take an exclusive look at the state-of-the-art Obinna TV Studios and production process",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4e556e12-d39e-4c62-abdb-f7df515ea398.JPG-oLcMjESnqhZNUlexFHETkH7JSs4TNr.jpeg",
        duration: "18:45",
        views: "180K",
        type: "Behind the Scenes",
      },
      {
        id: 3,
        title: "Live Studio Discussion",
        description: "Engaging conversations about trending topics with special guests and audience interaction",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c42bb50-f484-4a80-b3ff-e3ef35ca63c5.JPG-NRbmyyelMmzES1Xw8ZQiyzhl4EnIlz.jpeg",
        duration: "52:18",
        views: "320K",
        type: "Discussion",
      },
      {
        id: 4,
        title: "Premium Guest Experience",
        description: "How we create memorable moments for our guests in the Obinna Show experience",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ebcf051-276a-416a-ab74-c7600716dc4e.JPG-JPlLUf8EK9Y9jCvVjNXG88le8ef5Y0.jpeg",
        duration: "28:15",
        views: "195K",
        type: "Experience",
      },
    ],
    "obinna-show-extra": [
      {
        id: 5,
        title: "Extended Interview Highlights",
        description: "The best moments that didn't make it to the main show - uncut and unfiltered",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5d370067-649c-4f71-99dd-48b3922ca30c.JPG-tE7MRNABKjFTaZAdcl0bx9fFpBSnGz.jpeg",
        duration: "35:20",
        views: "145K",
        type: "Extended",
      },
      {
        id: 6,
        title: "Studio Prep & Setup",
        description: "Watch how the team prepares for each show, from lighting to guest coordination",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/030fe9dc-46f8-49a1-9f25-48dda3a18cfd.JPG-BWhNY68XXTCUEV1SwA7qZfDsTWouUt.jpeg",
        duration: "22:30",
        views: "98K",
        type: "Preparation",
      },
      {
        id: 7,
        title: "Guest Reactions & Moments",
        description: "Candid moments and genuine reactions from our studio guests during recordings",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4e556e12-d39e-4c62-abdb-f7df515ea398.JPG-5sTPKLG5qI2b7CnUkubvqfOl6b5YIK.jpeg",
        duration: "15:45",
        views: "125K",
        type: "Moments",
      },
    ],
    obinnaz: [
      {
        id: 8,
        title: "Comedy Crew Adventures",
        description: "Hilarious sketches and comedy content featuring the entire Obinnaz team",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5e1c4c89-49dd-42a2-bd6e-97ad5b7f6438.JPG-JQv92XiHfpvkSfXGmrbYBtF0aZqLHq.jpeg",
        duration: "25:10",
        views: "280K",
        type: "Comedy",
      },
      {
        id: 9,
        title: "Team Building Fun",
        description: "Watch the Obinnaz crew bond through games, challenges, and comedy sketches",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c42bb50-f484-4a80-b3ff-e3ef35ca63c5.JPG-SMgYMlnjhDjv6ufcaSF6ruTdVsqiCS.jpeg",
        duration: "32:45",
        views: "210K",
        type: "Team Content",
      },
    ],
    zabe: [
      {
        id: 10,
        title: "Family Values & Traditions",
        description: "Exploring the importance of family and cultural values in modern East African society",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ee2ec4f-a76e-4ebb-8b52-e7a71f45e761.JPG-dRf2lMMivvKnVMthsJFWvJLCIk5dz5.jpeg",
        duration: "38:20",
        views: "165K",
        type: "Cultural",
      },
      {
        id: 11,
        title: "Community Stories",
        description: "Heartwarming stories from the community showcasing East African culture and values",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9c87bfcb-cce1-4713-b55e-e62a7a8988c1.JPG-b3rEGtAxFoHE188imu9YIAX1lPJvkl.jpeg",
        duration: "42:15",
        views: "190K",
        type: "Community",
      },
    ],
  }

  const activeContent = showContent[activeCategory as keyof typeof showContent] || []

  return (
    <section ref={sectionRef} className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <Filter className="w-4 h-4 mr-2" />
            Premium Content Categories
          </div>

          <h1 className="section-title text-slate-900 mb-6 leading-tight">
            Explore Our <span className="gradient-text-gold">Show Categories</span>
          </h1>

          <p className="body-text text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover premium entertainment content across our flagship shows, each offering unique perspectives and
            unforgettable experiences.
          </p>
        </div>

        {/* Category Navigation */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-200`}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 min-h-[48px] ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Description */}
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-400`}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeCategory === category.id
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4 absolute"
              }`}
            >
              {activeCategory === category.id && (
                <div className="luxury-card p-6 sm:p-8 max-w-2xl mx-auto">
                  <h2 className="subsection-title text-slate-900 mb-4">{category.name}</h2>
                  <p className="body-text text-slate-600">{category.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activeContent.map((content, index) => (
            <div
              key={content.id}
              className={`luxury-card overflow-hidden group cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={`${content.thumbnail}?w=400&h=250&fit=crop&fm=webp&q=85`}
                  />
                  <img
                    src={`${content.thumbnail}?w=600&h=350&fit=crop&fm=webp&q=90`}
                    alt={content.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    style={{ objectPosition: "center 20%" }}
                  />
                </picture>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {content.duration}
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {content.views}
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#F3C623] to-[#FFD700] text-slate-900 px-2 py-1 rounded text-xs font-medium">
                  {content.type}
                </div>
              </div>

              {/* Content Info */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{content.description}</p>

                {/* CTA */}
                <button className="inline-flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700 transition-colors duration-300">
                  Watch Now
                  <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-800`}
        >
          <div className="luxury-card p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="subsection-title text-slate-900 mb-4">Never Miss New Content</h3>
            <p className="body-text text-slate-600 mb-6">
              Subscribe to Obinna TV for the latest episodes, behind-the-scenes content, and exclusive interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@obinnatv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <Play className="w-5 h-5 mr-2" />
                Subscribe on YouTube
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <button className="btn-secondary">Get Notifications</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
