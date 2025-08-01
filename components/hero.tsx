"use client"

import { useState, useEffect } from "react"
import { Play, Calendar, Users, Award, TrendingUp } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { icon: Users, value: "500K+", label: "YouTube Subscribers" },
    { icon: TrendingUp, value: "1M+", label: "Social Followers" },
    { icon: Calendar, value: "100+", label: "Events Hosted" },
    { icon: Award, value: "5+", label: "Years Experience" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/90"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-float animation-delay-200"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container-max section-padding text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            East Africa's Premier Entertainer
          </div>

          {/* Main heading */}
          <h1 className="font-dm-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 text-shadow">
            Meet <span className="gradient-text">Oga Obinna</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 max-w-4xl mx-auto font-light">
            Radio Host • Comedian • MC • Digital Content Creator
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience premium entertainment that connects, inspires, and entertains millions across East Africa and
            beyond. From comedy stages to radio waves, from YouTube screens to live events.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button onClick={() => scrollToSection("booking")} className="btn-primary group">
              <Calendar className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Book Obinna
            </button>
            <button onClick={() => scrollToSection("media")} className="btn-secondary group">
              <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Watch Content
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`luxury-card p-6 text-center transition-all duration-500 ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <Icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
