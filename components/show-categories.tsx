"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Clock, Eye, ExternalLink, Filter } from "lucide-react"

export function ShowCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("obinna-show")
  const [videosData, setVideosData] = useState<Record<string, any[]>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY // .env.local

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Each category now has channelId
  const categories = [
    {
      id: "obinna-show",
      name: "The Obinna Show",
      channelId: "UCe68ABxGwMZO3J8y_gerZ6A", // Replace with actual channel ID
      color: "from-purple-600 to-blue-600",
    },
    {
      id: "obinna-show-extra",
      name: "The Obinna Show Extra",
      channelId: "UC_9xRXWjRrz_Jy7SWhUnBBw",
      color: "from-pink-600 to-purple-600",
    },
    {
      id: "obinnaz",
      name: "The Obinnaz",
      channelId: "UCSVT1XTcae5Flp94OODu4mw",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "zabe",
      name: "Zabe",
      channelId: "UCEMsE6ZgO2sYnFBGxQK9vPA",
      color: "from-green-600 to-teal-600",
    },
  ]

  // Fetch videos for all channels
  useEffect(() => {
    async function fetchAllVideos() {
      const newData: Record<string, any[]> = {}

      for (let cat of categories) {
        try {
          // Step 1: Get uploads playlist ID
          const channelRes = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${cat.channelId}&key=${apiKey}`
          )
          const channelData = await channelRes.json()
          const uploadsPlaylistId =
            channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads

          if (!uploadsPlaylistId) continue

          // Step 2: Fetch up to 9 latest videos
          const videosRes = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=9&playlistId=${uploadsPlaylistId}&key=${apiKey}`
          )
          const videosJson = await videosRes.json()

          newData[cat.id] = videosJson.items.map((item: any) => ({
            id: item.contentDetails.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: item.snippet.publishedAt,
            url: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`,
          }))
        } catch (err) {
          console.error("Error fetching videos for", cat.name, err)
        }
      }
      setVideosData(newData)
    }
    fetchAllVideos()
  }, [])

  const activeVideos = videosData[activeCategory] || []

  return (
    <section ref={sectionRef} className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <Filter className="w-4 h-4 mr-2" />
            Premium Content Categories
          </div>
          <h1 className="section-title text-slate-900 mb-6">
            Explore Our <span className="gradient-text-gold">Show Categories</span>
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-3 rounded-xl font-semibold ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : "bg-white text-slate-700 hover:bg-slate-100 border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeVideos.length === 0 ? (
            <p>Loading videos...</p>
          ) : (
            activeVideos.map((video) => (
              <div key={video.id} className="luxury-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">{video.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{video.description}</p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 text-sm font-medium"
                  >
                    <span>Watch Now</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
