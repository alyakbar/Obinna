"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const CHANNEL_IDS = [
  "UC_9xRXWjRrz_Jy7SWhUnBBw", // Example
  "UCe68ABxGwMZO3J8y_gerZ6A",
  "UCEMsE6ZgO2sYnFBGxQK9vPA",
  "UCP6h0y-N-FUo8ATdUNpyxOA",
  "UCX7JsAQDAQzWpOeW2n7ZbxQ",
  "UCSVT1XTcae5Flp94OODu4mw"
]

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Final values fetched or static
  const [finalStats, setFinalStats] = useState({
    subs: 500000,       // Default fallback (500k)
    followers: 2000000, // 1M
    events: 100,
    years: 13,
  })

  // Values currently displayed/animated
  const [displayStats, setDisplayStats] = useState({
    subs: 0,
    followers: 0,
    events: 0,
    years: 0,
  })

  // Format numbers with millions (M), thousands (K), or just number
  const formatNumber = useCallback((num: number): string => {
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M+`
    } else if (num >= 1000) {
      return `${Math.floor(num / 1000)}K+`
    } else {
      return `${num}+`
    }
  }, [])

  // Fetch YouTube subscribers from multiple channels with timeout and error handling
  useEffect(() => {
    const fetchYouTubeSubs = async () => {
      if (!API_KEY) {
        console.warn("YouTube API key not found, using fallback values")
        setIsLoading(false)
        return
      }

      try {
        // Create abort controller for timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const fetchPromises = CHANNEL_IDS.map(async (id) => {
          try {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${API_KEY}`,
              { 
                signal: controller.signal,
                headers: {
                  'Accept': 'application/json',
                }
              }
            )
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            return await response.json()
          } catch (error) {
            console.warn(`Failed to fetch data for channel ${id}:`, error)
            return null
          }
        })

        const results = await Promise.allSettled(fetchPromises)
        clearTimeout(timeoutId)

        let totalSubs = 0
        let successfulFetches = 0

        results.forEach((result, index) => {
          if (result.status === 'fulfilled' && result.value?.items?.length > 0) {
            const subscriberCount = result.value.items[0].statistics?.subscriberCount
            if (subscriberCount) {
              const count = parseInt(subscriberCount, 10)
              if (!isNaN(count)) {
                totalSubs += count
                successfulFetches++
              }
            }
          }
        })

        // Only update if we got at least one successful result
        if (successfulFetches > 0) {
          setFinalStats((prev) => ({ ...prev, subs: totalSubs }))
        } else {
          console.warn("No successful API calls, using fallback subscriber count")
        }

      } catch (error) {
        console.error("Failed to fetch YouTube subscribers:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchYouTubeSubs()
  }, [])

  // Animate counters once visible - optimized animation
  useEffect(() => {
    if (!isVisible) return

    const animateCounters = () => {
      Object.entries(finalStats).forEach(([key, endValue]) => {
        const startValue = 0
        const duration = 1500 // Reduced duration for faster animation
        const startTime = performance.now()

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentValue = Math.floor(startValue + (endValue as number - startValue) * easeOutQuart)

          setDisplayStats((prev) => ({
            ...prev,
            [key]: currentValue,
          }))

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
      })
    }

    // Small delay to ensure smooth start
    const timer = setTimeout(animateCounters, 100)
    return () => clearTimeout(timer)
  }, [finalStats, isVisible])

  // Intersection observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px' // Start animation slightly before element is fully visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const stats = [
    { key: "subs", label: "YouTube Subscribers" },
    { key: "followers", label: "Social Followers" },  
    { key: "events", label: "Events Hosted" },
    { key: "years", label: "Years Experience" },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-900">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const currentValue = displayStats[stat.key as keyof typeof displayStats]
            const isSubscribers = stat.key === 'subs'

            return (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {isLoading && isSubscribers ? (
                    <div className="animate-pulse bg-gray-700 rounded h-12 w-20 mx-auto"></div>
                  ) : (
                    <span className="tabular-nums">
                      {isVisible ? formatNumber(currentValue) : "0+"}
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base text-gray-400 font-medium px-2">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}