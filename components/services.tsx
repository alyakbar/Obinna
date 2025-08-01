"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, Users, Award, Briefcase, Heart, Music, Camera, HandHeart, ChevronDown, ChevronUp } from "lucide-react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedService, setExpandedService] = useState<string | null>(null)
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

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  const services = [
    {
      id: "radio-hosting",
      icon: Mic,
      title: "Radio Hosting",
      description: "Leading voice in East African radio entertainment with engaging shows that captivate audiences.",
      fullDescription:
        "Transform your radio experience with Oga Obinna's dynamic hosting style. With years of experience in radio entertainment, Obinna brings unmatched energy, wit, and audience engagement to every show. From morning drive-time programs to evening entertainment slots, his authentic voice and cultural insight create compelling content that resonates with diverse audiences across East Africa.",
    },
    {
      id: "stand-up-comedy",
      icon: Users,
      title: "Stand-Up Comedy",
      description: "Hilarious performances across Kenya, Nigeria, and East Africa with family-friendly humor.",
      fullDescription:
        "Experience premium comedy entertainment with Oga Obinna's signature stand-up performances. Known for his clean, family-friendly humor and cultural observations, Obinna delivers laugh-out-loud moments that connect with audiences of all ages. Perfect for corporate events, comedy clubs, festivals, and private functions seeking professional entertainment.",
    },
    {
      id: "event-mc",
      icon: Award,
      title: "Event MC",
      description: "Premium MC services for corporate events, weddings, and entertainment shows.",
      fullDescription:
        "Elevate your event with Kenya's most charismatic MC. Oga Obinna brings professional hosting expertise, crowd engagement mastery, and seamless event flow management. From corporate galas to wedding celebrations, his commanding stage presence and improvisational skills ensure your event runs smoothly while keeping guests entertained throughout.",
    },
    {
      id: "brand-endorsements",
      icon: Briefcase,
      title: "Brand Endorsements",
      description: "Authentic brand partnerships and collaborations with leading companies across the region.",
      fullDescription:
        "Partner with one of East Africa's most trusted entertainment personalities. Oga Obinna's authentic voice and massive social media following provide premium brand exposure through creative campaigns, genuine endorsements, and strategic storytelling that resonates with your target audience and drives meaningful engagement.",
    },
    {
      id: "apology-package",
      icon: Heart,
      title: "Apology Package",
      description: "A unique and humorous way to send apologies through Obinna's personal delivery.",
      fullDescription:
        "Made a mistake? Let Kenya's most beloved entertainer help you make amends! This signature service includes personalized apology videos, custom message crafting, and Obinna's charm to help mend relationships. Whether for romantic gestures, business apologies, or family reconciliation, this heartfelt approach has proven success in restoring connections.",
    },
    {
      id: "sound-dj",
      icon: Music,
      title: "Sound & DJ",
      description: "Professional sound system and DJ services curated by Obinna's entertainment network.",
      fullDescription:
        "Complete audio entertainment solutions featuring high-quality sound systems and experienced DJs from Obinna's professional network. Our team understands crowd dynamics and music selection that keeps your guests engaged all night. Includes technical support, backup equipment, and customized playlists tailored to your event's vibe.",
    },
    {
      id: "photography",
      icon: Camera,
      title: "Photography",
      description: "Capture your moments with high-quality photography coverage.",
      fullDescription:
        "Professional event photography services that capture every precious moment of your special occasion. Our experienced photographers specialize in event documentation, candid moments, and high-quality portraits. Services include pre-event consultation, comprehensive coverage, same-day highlights, and professionally edited gallery delivery within 48 hours.",
    },
    {
      id: "meet-greet",
      icon: HandHeart,
      title: "Meet & Greet",
      description: "Book a personal session with Obinna for fans, friends, or clients.",
      fullDescription:
        "Intimate meet and greet experiences with Oga Obinna for your VIP guests or special occasions. Perfect for fan events, corporate VIP experiences, or personal celebrations. Includes personalized interactions, photo opportunities, autograph sessions, and those unforgettable moments that create lifelong memories for your guests.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Premium Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional entertainment services that elevate your events and engage your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedService === service.id
            return (
              <div
                key={service.id}
                className={`card transition-all duration-800 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                } ${isExpanded ? "col-span-full" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-6 sm:p-8 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>

                  <button
                    onClick={() => toggleService(service.id)}
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-gold-600 font-medium transition-colors duration-300"
                  >
                    Learn More
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-200 text-left animate-fade-in-up">
                      <p className="text-gray-700 leading-relaxed">{service.fullDescription}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
