"use client"

import { useState, useEffect, useRef } from "react"
import { TrendingUp, Calendar, Award, Play, Heart, Star } from "lucide-react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ subs: 0, followers: 0, events: 0, years: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    {
      icon: Play,
      value: "500K+",
      label: "YouTube Subscribers",
      description: "Obinna TV Channel",
      color: "from-red-500 to-red-600",
      finalValue: 500000,
      key: "subs",
    },
    {
      icon: Heart,
      value: "1M+",
      label: "Social Followers",
      description: "Across All Platforms",
      color: "from-pink-500 to-pink-600",
      finalValue: 1000000,
      key: "followers",
    },
    {
      icon: Calendar,
      value: "100+",
      label: "Events Hosted",
      description: "Premium Entertainment",
      color: "from-blue-500 to-blue-600",
      finalValue: 100,
      key: "events",
    },
    {
      icon: Award,
      value: "5+",
      label: "Years Experience",
      description: "Industry Excellence",
      color: "from-amber-500 to-amber-600",
      finalValue: 5,
      key: "years",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Animate counters
          stats.forEach((stat) => {
            let start = 0
            const end = stat.finalValue
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }

              setCounters((prev) => ({
                ...prev,
                [stat.key]: Math.floor(start),
              }))
            }, 16)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const formatNumber = (num: number, originalValue: string) => {
    if (originalValue.includes("K")) {
      return `${Math.floor(num / 1000)}K+`
    } else if (originalValue.includes("M")) {
      return `${(num / 1000000).toFixed(1)}M+`
    } else {
      return `${num}+`
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Impact & Reach
          </div>

          <h2 className="font-dm-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            Numbers That <span className="gradient-text">Speak Volumes</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover the impressive reach and impact of Oga Obinna's entertainment empire across East Africa and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const currentValue = counters[stat.key as keyof typeof counters]

            return (
              <div
                key={stat.label}
                className={`group relative transition-all duration-500 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card */}
                <div className="luxury-card p-8 text-center h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Counter */}
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 font-mono">
                    {isVisible ? formatNumber(currentValue, stat.value) : "0"}
                  </div>

                  {/* Label */}
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{stat.label}</h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm">{stat.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
            <Star className="w-6 h-6 text-amber-400" />
            <span className="text-white font-medium">Join millions who trust Oga Obinna for premium entertainment</span>
            <Star className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
