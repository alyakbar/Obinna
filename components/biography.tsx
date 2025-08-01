"use client"

import { useState, useEffect, useRef } from "react"

export function Biography() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Oga Obinna Professional Portrait"
                className="w-full h-[600px] object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="font-dm-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              The Man Behind the <span className="gradient-text">Laughter</span>
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                <strong>Steve Thompson Maghana</strong>, professionally known as Oga Obinna, represents the new
                generation of African entertainers who seamlessly blend traditional storytelling with contemporary
                humor. Born to a Kenyan mother and Nigerian father, his multicultural background provides a unique
                perspective that resonates across East Africa and beyond.
              </p>

              <p>
                His journey into entertainment began during his university years, where his natural ability to connect
                with people and make them laugh became evident. What started as casual performances among friends
                evolved into a professional career that now spans radio, television, digital content creation, and live
                events.
              </p>

              <p>
                Oga Obinna's approach to comedy is refreshingly authentic. He draws inspiration from everyday African
                experiences, cultural nuances, and social observations, creating content that is both entertaining and
                thought-provoking. His commitment to family-friendly entertainment has made him a trusted figure among
                diverse audiences.
              </p>

              <p>
                Beyond entertainment, Obinna is passionate about youth empowerment and entrepreneurship. He regularly
                mentors upcoming comedians and content creators, sharing insights from his journey and helping others
                navigate the entertainment industry.
              </p>

              <p>
                Today, as one of East Africa's most recognizable media personalities, Oga Obinna continues to push
                boundaries while staying true to his roots. His work spans multiple platforms, reaching millions of
                people and establishing him as a premium brand in the entertainment space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
