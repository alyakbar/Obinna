"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Award, Users, Mic, Video } from "lucide-react"

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Radio Host",
      description: "Leading voice in East African radio entertainment",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creator",
      description: "500K+ subscribers on Obinna TV YouTube channel",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event MC",
      description: "Premium MC services for corporate and entertainment events",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Comedian",
      description: "Stand-up comedy across Kenya, Nigeria, and East Africa",
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="mb-6">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">About Oga Obinna</span>
              <h2 className="font-dm-serif text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 text-balance">
                Entertainment Excellence
                <span className="gradient-text"> Redefined</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Steve Thompson Maghana, professionally known as Oga Obinna, is a dynamic Kenyan-Nigerian entertainer who
                has redefined comedy and media in East Africa. With his unique blend of humor, authenticity, and
                cultural insight, he has become one of the region's most sought-after personalities.
              </p>
              <p>
                From hosting popular radio shows to creating viral YouTube content, Oga Obinna brings premium
                entertainment value to every platform. His family-friendly approach and positive messaging have earned
                him partnerships with leading brands and a loyal following across multiple demographics.
              </p>
            </div>

            <Link href="/about" className="btn-primary group">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Achievements Grid */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`luxury-card p-6 text-center transition-all duration-500 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
