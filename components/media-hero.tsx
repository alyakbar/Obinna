"use client"

import { useState, useEffect, useCallback } from "react"

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const CHANNEL_IDS = [
  "UC_9xRXWjRrz_Jy7SWhUnBBw", // Example
  "UCe68ABxGwMZO3J8y_gerZ6A",
  "UCEMsE6ZgO2sYnFBGxQK9vPA",
  "UCP6h0y-N-FUo8ATdUNpyxOA",
  "UCX7JsAQDAQzWpOeW2n7ZbxQ",
  "UCSVT1XTcae5Flp94OODu4mw"
]

export function MediaHero() {
  const [stats, setStats] = useState({
    subscribers: 500000, // Fallback: 500K
    videos: 200,         // Fallback: 200
    views: 50000000,     // Fallback: 50M
    categories: 4        // Static
  })
  
  const [isLoading, setIsLoading] = useState(true)

  // Format numbers for display
  const formatNumber = useCallback((num: number): string => {
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(2)}B+`
    } else if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(2)}M+`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}K+`
    } else {
      return `${num}+`
    }
  }, [])

  // Fetch YouTube data
  useEffect(() => {
    const fetchYouTubeData = async () => {
      if (!API_KEY) {
        console.warn("YouTube API key not found, using fallback values")
        setIsLoading(false)
        return
      }

      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout

        const fetchPromises = CHANNEL_IDS.map(async (id) => {
          try {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${API_KEY}`,
              { 
                signal: controller.signal,
                headers: { 'Accept': 'application/json' }
              }
            )
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            const data = await response.json()
            return data
          } catch (error) {
            console.warn(`Failed to fetch data for channel ${id}:`, error)
            return null
          }
        })

        const results = await Promise.allSettled(fetchPromises)
        clearTimeout(timeoutId)

        let totalSubs = 0
        let totalVideos = 0
        let totalViews = 0
        let successfulFetches = 0

        results.forEach((result) => {
          if (result.status === 'fulfilled' && result.value?.items?.length > 0) {
            const statistics = result.value.items[0].statistics
            
            if (statistics) {
              const subs = parseInt(statistics.subscriberCount || "0", 10)
              const videos = parseInt(statistics.videoCount || "0", 10)
              const views = parseInt(statistics.viewCount || "0", 10)

              if (!isNaN(subs)) totalSubs += subs
              if (!isNaN(videos)) totalVideos += videos
              if (!isNaN(views)) totalViews += views
              
              successfulFetches++
            }
          }
        })

        // Only update if we got at least one successful result
        if (successfulFetches > 0) {
          setStats(prev => ({
            ...prev,
            subscribers: totalSubs > 0 ? totalSubs : prev.subscribers,
            videos: totalVideos > 0 ? totalVideos : prev.videos,
            views: totalViews > 0 ? totalViews : prev.views
          }))
        } else {
          console.warn("No successful API calls, using fallback values")
        }

      } catch (error) {
        console.error("Failed to fetch YouTube data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchYouTubeData()
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float animation-delay-200"></div>
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <div className="w-4 h-4 mr-2 bg-white/70 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Premium Content Hub
          </div>

          <h1 className="hero-title text-white mb-6 leading-tight">
            Media <span className="gradient-text-gold">Gallery</span>
          </h1>

          <p className="body-text text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our premium content library featuring The Obinna Show, exclusive interviews, behind-the-scenes
            moments, and cultural programming that defines East African entertainment.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {isLoading ? (
                  <div className="animate-pulse bg-white/20 rounded h-8 w-16 mx-auto"></div>
                ) : (
                  <span className="tabular-nums">{formatNumber(stats.subscribers)}</span>
                )}
              </div>
              <div className="text-sm text-white/70">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {isLoading ? (
                  <div className="animate-pulse bg-white/20 rounded h-8 w-16 mx-auto"></div>
                ) : (
                  <span className="tabular-nums">{formatNumber(stats.videos)}</span>
                )}
              </div>
              <div className="text-sm text-white/70">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {isLoading ? (
                  <div className="animate-pulse bg-white/20 rounded h-8 w-16 mx-auto"></div>
                ) : (
                  <span className="tabular-nums">{formatNumber(stats.views)}</span>
                )}
              </div>
              <div className="text-sm text-white/70">Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                <span className="tabular-nums">{stats.categories}</span>
              </div>
              <div className="text-sm text-white/70">Show Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}