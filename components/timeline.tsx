"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, Award, Briefcase } from "lucide-react"

export function Timeline() {
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

  const timelineEvents = [
    {
      year: "2019",
      title: "Comedy Career Launch",
      description:
        "Started performing stand-up comedy at local venues in Nairobi, developing his unique style that blends Kenyan and Nigerian humor.",
      icon: Award,
      location: "Nairobi, Kenya",
      type: "milestone",
    },
    {
      year: "2020",
      title: "Radio Breakthrough",
      description:
        "Joined major radio station as co-host, bringing fresh energy and multicultural perspective to morning shows.",
      icon: Briefcase,
      location: "Nairobi, Kenya",
      type: "career",
    },
    {
      year: "2021",
      title: "Obinna TV Launch",
      description: "Created YouTube channel 'Obinna TV' focusing on comedy skits, interviews, and lifestyle content.",
      icon: Calendar,
      location: "Digital Platform",
      type: "milestone",
    },
    {
      year: "2022",
      title: "Brand Partnerships",
      description:
        "Secured major brand endorsements and became the face of several premium campaigns across East Africa.",
      icon: Briefcase,
      location: "East Africa",
      type: "career",
    },
    {
      year: "2023",
      title: "500K Subscribers",
      description:
        "Reached half a million YouTube subscribers, establishing himself as a leading digital content creator.",
      icon: Award,
      location: "Global Reach",
      type: "milestone",
    },
    {
      year: "2024",
      title: "Premium Entertainment",
      description:
        "Expanded into high-end event hosting, corporate MC services, and motivational speaking engagements.",
      icon: Calendar,
      location: "East Africa & Beyond",
      type: "career",
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Career Journey
          </div>

          <h2 className="font-dm-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Path to <span className="gradient-text">Excellence</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Follow Oga Obinna's remarkable journey from local comedy stages to becoming East Africa's most sought-after
            entertainer and media personality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500 transform md:-translate-x-0.5"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg transform -translate-x-2 md:-translate-x-2 z-10">
                    <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="luxury-card p-6 group">
                      {/* Year Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm font-bold mb-4">
                        {event.year}
                      </div>

                      {/* Icon and Title */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                            event.type === "milestone"
                              ? "bg-gradient-to-r from-amber-500 to-yellow-500"
                              : "bg-gradient-to-r from-blue-500 to-blue-600"
                          }`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                            {event.title}
                          </h3>
                          <div className="flex items-center text-sm text-slate-500 mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">{event.description}</p>

                      {/* Type Badge */}
                      <div className="mt-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            event.type === "milestone" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {event.type === "milestone" ? "🏆 Milestone" : "💼 Career"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="luxury-card p-8 max-w-2xl mx-auto">
            <h3 className="font-dm-serif text-2xl font-bold text-slate-900 mb-4">The Journey Continues</h3>
            <p className="text-slate-600 mb-6">
              With each milestone, Oga Obinna continues to push boundaries and set new standards in East African
              entertainment. Be part of the next chapter.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Join the Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
