"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, Users, Video, Award, Heart, Zap, Star } from "lucide-react"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Entertainment Mastery",
      icon: Star,
      color: "from-amber-500 to-yellow-500",
      skills: [
        { name: "Stand-up Comedy", level: 95, description: "Hilarious performances that connect cultures" },
        { name: "Event Hosting", level: 92, description: "Premium MC services for all occasions" },
        { name: "Audience Engagement", level: 98, description: "Magnetic stage presence and crowd control" },
        { name: "Improvisation", level: 90, description: "Quick wit and spontaneous humor" },
      ],
    },
    {
      title: "Media & Broadcasting",
      icon: Mic,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Radio Hosting", level: 94, description: "Leading voice in East African radio" },
        { name: "Content Creation", level: 96, description: "500K+ YouTube subscribers and growing" },
        { name: "Interview Skills", level: 88, description: "Engaging conversations with celebrities" },
        { name: "Voice Acting", level: 85, description: "Versatile vocal performances" },
      ],
    },
    {
      title: "Creative Arts",
      icon: Video,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Music Production", level: 80, description: "Artist and musician with original content" },
        { name: "Video Production", level: 87, description: "High-quality content for digital platforms" },
        { name: "Writing", level: 83, description: "Author and creative storyteller" },
        { name: "Brand Development", level: 91, description: "Building premium personal brand" },
      ],
    },
    {
      title: "Leadership & Impact",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Motivational Speaking", level: 89, description: "Inspiring the next generation" },
        { name: "Cultural Bridge", level: 95, description: "Connecting Kenyan and Nigerian cultures" },
        { name: "Youth Mentorship", level: 92, description: "Guiding upcoming entertainers" },
        { name: "Community Impact", level: 88, description: "Positive influence across East Africa" },
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="container-max">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Skills & Expertise
          </div>

          <h2 className="font-dm-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Mastery Across <span className="gradient-text">Multiple Domains</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the diverse skill set that makes Oga Obinna East Africa's most versatile entertainer and media
            personality.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon

            return (
              <div
                key={category.title}
                className={`transition-all duration-500 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="luxury-card p-8 h-full">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}
                    >
                      <CategoryIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-slate-900">{category.title}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mt-2"></div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                        style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">{skill.name}</h4>
                          <span className="text-sm font-bold text-amber-600">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 rounded-full h-2 mb-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100 + 500}ms`,
                            }}
                          ></div>
                        </div>

                        {/* Skill Description */}
                        <p className="text-sm text-slate-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <div className="luxury-card p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">Multi-Talented</h4>
                <p className="text-slate-600">Master of multiple entertainment disciplines</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">Audience-Focused</h4>
                <p className="text-slate-600">Deep understanding of diverse audiences</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">Impact-Driven</h4>
                <p className="text-slate-600">Creating positive change through entertainment</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="font-dm-serif text-2xl font-bold text-slate-900 mb-4">Ready to Experience Excellence?</h3>
              <p className="text-slate-600 mb-6">
                Book Oga Obinna for your next event and witness these skills in action.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
