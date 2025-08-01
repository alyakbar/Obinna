"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Calendar } from "lucide-react"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // ALL 8 IMAGES WITH INDIVIDUAL FOCAL POINT POSITIONING
  const slides = [
    {
      id: 1,
      role: "Media Personality",
      subtitle: "Professional interviews and engaging conversations in premium studio settings",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0525.JPG-hUmDGM0ps0TvAsL7zLK4L5Km0Gdllg.jpeg",
      alt: "Oga Obinna - Professional Media Interview Setting",
      // Grey suit, thoughtful pose - face positioned upper center
      mobilePosition: "object-[50%_25%]", // Face focus for mobile
      desktopPosition: "object-[50%_30%]", // Slightly lower for desktop
    },
    {
      id: 2,
      role: "Talk Show Host",
      subtitle: "Creating memorable moments with authentic conversations and genuine connections",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0529%202.JPG-3zWSOYSPiW1XVUGMWez08lV5FDffWt.jpeg",
      alt: "Oga Obinna - Premium Talk Show Host",
      // Grey suit, smiling - face positioned upper center
      mobilePosition: "object-[50%_20%]", // Higher focus for mobile
      desktopPosition: "object-[50%_25%]",
    },
    {
      id: 3,
      role: "Premium Entertainer",
      subtitle: "Elegant formal presentations and high-end event hosting services",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0523.JPG-QgUskvsyZU3FbvNruuJTsHqqfjLPlY.jpeg",
      alt: "Oga Obinna - Formal Event Entertainment",
      // Blue tuxedo headshot - close-up, face centered
      mobilePosition: "object-[50%_30%]",
      desktopPosition: "object-[50%_35%]",
    },
    {
      id: 4,
      role: "Master of Ceremonies",
      subtitle: "Dynamic stage presence bringing energy and excitement to every event",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0521.JPG-IFtxqsiXjgqvfOGrmdfstxvXdKDt39.jpeg",
      alt: "Oga Obinna - Dynamic MC Performance",
      // Blue tuxedo, arms outstretched - full body, face needs upper positioning
      mobilePosition: "object-[50%_15%]", // Much higher for mobile to show face
      desktopPosition: "object-[50%_20%]",
    },
    {
      id: 5,
      role: "Brand Ambassador",
      subtitle: "Sophisticated brand representation with authentic personality and style",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0519%202.JPG-B1H2Pft5DABXKYRVbKqbSwcBizy2aw.jpeg",
      alt: "Oga Obinna - Premium Brand Ambassador",
      // White tuxedo, thoughtful - face positioned upper center
      mobilePosition: "object-[50%_25%]",
      desktopPosition: "object-[50%_30%]",
    },
    {
      id: 6,
      role: "Master of Ceremonies",
      subtitle: "Welcoming audiences with open arms and infectious energy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0521%202.JPG-fhVZ4bmNr75YhgYNCboLcseRwR59T9.jpeg",
      alt: "Oga Obinna - Welcoming MC Performance",
      // Blue tuxedo, welcoming gesture - full body, face needs upper positioning
      mobilePosition: "object-[50%_18%]", // Higher focus for mobile
      desktopPosition: "object-[50%_22%]",
    },
    {
      id: 7,
      role: "Comedy Entertainer",
      subtitle: "Bringing joy and laughter with contemporary style and approachable charm",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0524.JPG-zT5a4clEOVTIOoyXRGrGN0jQJtY6Bx.jpeg",
      alt: "Oga Obinna - Contemporary Comedy Style",
      // Blue suit with sneakers - full body, face needs upper positioning
      mobilePosition: "object-[50%_20%]",
      desktopPosition: "object-[50%_25%]",
    },
    {
      id: 8,
      role: "Corporate Speaker",
      subtitle: "Professional presentations and motivational speaking for business audiences",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0519.JPG-4AQZHpI06Grvfzx44abNTUurt7xIm4.jpeg",
      alt: "Oga Obinna - Corporate Speaking Engagement",
      // White tuxedo, professional - face positioned upper center
      mobilePosition: "object-[50%_25%]",
      desktopPosition: "object-[50%_30%]",
    },
  ]

  // TOUCH HANDLERS FOR MOBILE SWIPE FUNCTIONALITY
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // AUTO-PLAY CAROUSEL EVERY 5 SECONDS + INITIALIZE
  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  // NAVIGATION FUNCTIONS
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative h-screen overflow-hidden"
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* FULL-SCREEN BACKGROUND CAROUSEL - ALL 8 IMAGES WITH FACE-FOCUSED POSITIONING */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* RESPONSIVE IMAGE CONTAINER WITH PROPER ASPECT RATIOS */}
            <div className="absolute inset-0">
              {/* MOBILE: Portrait aspect ratio with face-focused positioning */}
              <div className="block sm:hidden w-full h-full">
                <img
                  src={`${slide.image}?w=768&h=1024&fit=crop&crop=face&fm=webp&q=85`}
                  alt={slide.alt}
                  className={`w-full h-full object-cover ${slide.mobilePosition}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* TABLET: Balanced aspect ratio */}
              <div className="hidden sm:block lg:hidden w-full h-full">
                <img
                  src={`${slide.image}?w=1024&h=768&fit=crop&crop=face&fm=webp&q=88`}
                  alt={slide.alt}
                  className={`w-full h-full object-cover ${slide.mobilePosition} md:${slide.desktopPosition}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* DESKTOP: Landscape aspect ratio with optimal positioning */}
              <div className="hidden lg:block w-full h-full">
                <img
                  src={`${slide.image}?w=1920&h=1080&fit=crop&crop=face&fm=webp&q=90`}
                  alt={slide.alt}
                  className={`w-full h-full object-cover ${slide.desktopPosition}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* FALLBACK: Single responsive image with smart cropping */}
              <picture className="hidden">
                <source
                  media="(max-width: 640px)"
                  srcSet={`${slide.image}?w=640&h=960&fit=crop&crop=face&fm=webp&q=85`}
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet={`${slide.image}?w=1024&h=768&fit=crop&crop=face&fm=webp&q=88`}
                />
                <source
                  media="(min-width: 1025px)"
                  srcSet={`${slide.image}?w=1920&h=1080&fit=crop&crop=face&fm=webp&q=90`}
                />
                <img
                  src={`${slide.image}?w=1920&h=1080&fit=crop&crop=face&fm=webp&q=90`}
                  alt={slide.alt}
                  className={`w-full h-full object-cover ${slide.mobilePosition} md:${slide.desktopPosition}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>
            </div>

            {/* PREMIUM HERO OVERLAY - GRADIENT ENSURES TEXT READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
          </div>
        ))}
      </div>

      {/* HERO CONTENT - POSITIONED TO AVOID FACE AREA */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* CONTENT POSITIONED IN LOWER HALF TO AVOID FACE CROPPING */}
          <div
            className={`text-center transition-all duration-1000 mt-auto mb-32 sm:mb-24 lg:mb-16 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* PREMIUM BRAND NAME - POSITIONED BELOW FACE AREA */}
            <h1 className="hero-title mb-4 sm:mb-6 tracking-wide leading-tight text-glow-gold">Oga Obinna</h1>

            {/* DYNAMIC ROLE TITLE - CHANGES WITH EACH IMAGE */}
            <div className="mb-4 sm:mb-6">
              <h2 className="font-dm-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-normal mb-2 sm:mb-3 text-shadow leading-tight tracking-wide">
                {slides[currentSlide].role}
              </h2>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-4 text-shadow-sm leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* PREMIUM TAGLINE */}
            <p className="text-sm sm:text-base text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 text-shadow-sm font-light tracking-wide">
              East Africa's Premier Entertainer & Media Personality
            </p>

            {/* PREMIUM CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto">
              <button onClick={() => scrollToSection("contact")} className="btn-primary w-full sm:w-auto group">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:scale-110" />
                Book Event
              </button>
              <button onClick={() => scrollToSection("media")} className="btn-secondary w-full sm:w-auto group">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:scale-110" />
                Watch Content
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION ARROWS - POSITIONED TO AVOID FACE AREA */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      {/* PREMIUM DOTS INDICATOR - POSITIONED AT BOTTOM */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 ${
              index === currentSlide
                ? "bg-gradient-to-r from-[#F3C623] to-[#FFD700] scale-125 shadow-gold-glow"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}: ${slides[index].role}`}
          />
        ))}
      </div>

      {/* MOBILE SWIPE INDICATOR */}
      <div className="sm:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 text-white/60 text-xs text-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-0.5 bg-white/40 rounded"></div>
          <span className="font-poppins tracking-wide text-xs">Swipe</span>
          <div className="w-6 h-0.5 bg-white/40 rounded"></div>
        </div>
      </div>

      {/* SLIDE COUNTER - POSITIONED TO AVOID FACE AREA */}
      <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  )
}
