"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-800 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="section-title text-slate-900 mb-6 sm:mb-8 leading-tight">
              Meet the{" "}
              <span className="text-transparent bg-gradient-to-r from-[#F3C623] to-[#FFD700] bg-clip-text">
                Entertainer
              </span>
            </h2>

            <div className="prose-custom">
              <p>
                <strong className="text-slate-900 font-semibold">Steve Thompson Maghana</strong>, professionally known
                as Oga Obinna, is East Africa's most dynamic entertainer who has redefined comedy and media across the
                region. With his unique blend of humor, authenticity, and cultural insight, he has become the go-to
                personality for premium entertainment experiences.
              </p>

              <p>
                From hosting popular radio shows to creating viral YouTube content, Oga Obinna brings unmatched
                entertainment value to every platform. His multicultural background and family-friendly approach have
                earned him partnerships with leading brands and a loyal following spanning multiple demographics across
                Kenya, Nigeria, and beyond.
              </p>
            </div>

            <Link href="/about" className="btn-primary mt-6 sm:mt-8 group inline-flex items-center">
              Learn More About Obinna
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-200`}
          >
            <div className="relative">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce85d23e-64b0-43d7-8e7e-717124ce52e9-PDsZEWDxSJnVVQDrXsRqGILYGEaY9Y.webp?w=600&h=400&fit=crop"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce85d23e-64b0-43d7-8e7e-717124ce52e9-PDsZEWDxSJnVVQDrXsRqGILYGEaY9Y.webp"
                  alt="Oga Obinna Professional Portrait"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-luxury"
                  loading="lazy"
                />
              </picture>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#F3C623] to-[#FFD700] rounded-2xl flex items-center justify-center shadow-gold-glow">
                <div className="text-center text-slate-900">
                  <div className="text-lg sm:text-xl font-bold font-dm-serif">5+</div>
                  <div className="text-xs font-poppins font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
