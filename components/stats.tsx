"use client"

import { useState, useEffect, useRef } from "react"

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ subs: 0, followers: 0, events: 0, years: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { key: "subs", value: "500K+", label: "YouTube Subscribers", finalValue: 500 },
    { key: "followers", value: "1M+", label: "Social Followers", finalValue: 1000 },
    { key: "events", value: "100+", label: "Events Hosted", finalValue: 100 },
    { key: "years", value: "5+", label: "Years Experience", finalValue: 5 },
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
      return `${num}K+`
    } else if (originalValue.includes("M")) {
      return `${(num / 1000).toFixed(1)}M+`
    } else {
      return `${num}+`
    }
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-900">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const currentValue = counters[stat.key as keyof typeof counters]

            return (
              <div
                key={stat.label}
                className={`text-center transition-all duration-800 ${isVisible ? "animate-count-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {isVisible ? formatNumber(currentValue, stat.value) : "0"}
                </div>
                <div className="text-sm sm:text-base text-gray-400 font-medium px-2">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
