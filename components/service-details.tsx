"use client"

import { useState, useEffect, useRef } from "react"
import {
  Mic,
  Users,
  Award,
  Heart,
  Music,
  Camera,
  HandHeart,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  DollarSign,
} from "lucide-react"

export function ServiceDetails() {
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
      id: "event-mc",
      icon: Mic,
      title: "Event MC",
      price: "From KSh 50,000",
      duration: "2-8 hours",
      description:
        "Transform your event with Kenya's most charismatic MC. Oga Obinna brings unmatched energy, crowd engagement, and seamless event flow management.",
      fullDescription:
        "Elevate your event with professional MC services that guarantee memorable experiences. Oga Obinna's commanding stage presence, improvisational skills, and cultural insight ensure your event runs smoothly while keeping guests entertained throughout. Perfect for corporate galas, product launches, award ceremonies, and wedding celebrations.",
      features: [
        "Pre-event consultation and planning",
        "Custom script development",
        "Professional stage presence",
        "Crowd engagement expertise",
        "Seamless event transitions",
        "Microphone and basic sound coordination",
      ],
    },
    {
      id: "influencing",
      icon: Star,
      title: "Brand Influencing",
      price: "From KSh 100,000",
      duration: "Campaign based",
      description:
        "Leverage Oga Obinna's massive social media following and authentic voice to amplify your brand message across multiple platforms.",
      fullDescription:
        "Partner with one of East Africa's most trusted entertainment personalities for authentic brand storytelling. With millions of engaged followers across platforms, your brand gets premium exposure through creative content, genuine endorsements, and strategic campaigns that resonate with target demographics.",
      features: [
        "Multi-platform content creation",
        "Authentic brand storytelling",
        "Millions of engaged followers",
        "Creative campaign concepts",
        "Performance analytics and reporting",
        "Long-term partnership opportunities",
      ],
    },
    {
      id: "apology-package",
      icon: Heart,
      title: "Apology Package",
      price: "From KSh 25,000",
      duration: "1-2 hours",
      description: "A unique and humorous way to send apologies through Obinna's personal delivery and charm.",
      fullDescription:
        "Made a mistake? Let Kenya's most beloved entertainer help you make amends! This signature service includes personalized apology videos, custom message crafting, and Obinna's natural charm to help mend relationships. Whether for romantic gestures, business apologies, or family reconciliation, this heartfelt approach has proven success.",
      features: [
        "Personalized apology video creation",
        "Custom message crafting",
        "Emotional storytelling approach",
        "High success rate in reconciliation",
        "Discreet and professional delivery",
        "Follow-up consultation if needed",
      ],
    },
    {
      id: "appearance",
      icon: Award,
      title: "Special Appearance",
      price: "From KSh 75,000",
      duration: "1-3 hours",
      description: "Add star power to your event with Oga Obinna's special appearance and celebrity presence.",
      fullDescription:
        "Create unforgettable moments with celebrity appearances that generate buzz and social media engagement. Perfect for grand openings, VIP parties, brand activations, and exclusive gatherings. Includes red carpet moments, photo opportunities, brief remarks, and that star quality that makes your event truly special.",
      features: [
        "Red carpet presence",
        "Professional photo opportunities",
        "Brief remarks or speech",
        "Social media buzz generation",
        "VIP guest interactions",
        "Event publicity enhancement",
      ],
    },
    {
      id: "event-management",
      icon: Users,
      title: "Event Management",
      price: "From KSh 200,000",
      duration: "Full service",
      description: "Complete end-to-end event management by Obinna's professional team for flawless execution.",
      fullDescription:
        "Comprehensive event planning and management services that handle every detail from concept to execution. Our experienced team manages venue selection, vendor coordination, timeline development, and on-site supervision to ensure your event exceeds expectations with celebrity-level attention to detail.",
      features: [
        "Complete event planning and design",
        "Vendor coordination and management",
        "Timeline development and management",
        "On-site supervision and coordination",
        "Celebrity-level execution standards",
        "Post-event analysis and reporting",
      ],
    },
    {
      id: "sound-dj",
      icon: Music,
      title: "Sound & DJ Services",
      price: "From KSh 40,000",
      duration: "4-12 hours",
      description: "Professional sound system and DJ services curated by Obinna's entertainment network.",
      fullDescription:
        "Complete audio entertainment solutions featuring high-quality sound systems and experienced DJs from Obinna's professional network. Our team understands crowd dynamics and music selection that keeps your guests engaged all night. Perfect for weddings, corporate events, and private parties.",
      features: [
        "Professional sound system setup",
        "Experienced DJ from our network",
        "Backup equipment and technical support",
        "Custom playlist development",
        "Crowd reading and music adaptation",
        "Wireless microphone systems",
      ],
    },
    {
      id: "photography",
      icon: Camera,
      title: "Event Photography",
      price: "From KSh 60,000",
      duration: "4-8 hours",
      description: "Capture your moments with high-quality photography coverage and professional editing.",
      fullDescription:
        "Professional event photography services that document every precious moment of your special occasion. Our experienced photographers specialize in event coverage, candid moments, and high-quality portraits that tell your event's story beautifully.",
      features: [
        "Professional photographers",
        "Comprehensive event coverage",
        "Same-day highlight delivery",
        "48-hour full gallery delivery",
        "High-resolution image gallery",
        "Professional editing and retouching",
      ],
    },
    {
      id: "meet-greet",
      icon: HandHeart,
      title: "Meet & Greet",
      price: "From KSh 30,000",
      duration: "30-60 minutes",
      description: "Book a personal session with Obinna for fans, friends, or clients in an intimate setting.",
      fullDescription:
        "Intimate meet and greet experiences with Oga Obinna for your VIP guests or special occasions. Perfect for fan events, corporate VIP experiences, or personal celebrations. Create unforgettable memories through personalized interactions, photo opportunities, and authentic conversations.",
      features: [
        "Personal one-on-one interactions",
        "Professional photo opportunities",
        "Autograph sessions",
        "VIP experience coordination",
        "Memorable conversation moments",
        "Flexible scheduling options",
      ],
    },
  ]

  return (
    <section id="service-details" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Click on any service below to learn more about what's included and how we can make your event extraordinary
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isExpanded = expandedService === service.id

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Header - Clickable */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 sm:p-8 text-left hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="p-3 bg-gray-900 rounded-xl">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <div className="flex items-center gap-2 text-gold-600 font-semibold mb-1">
                          <DollarSign className="w-4 h-4" />
                          {service.price}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Mobile pricing */}
                  <div className="sm:hidden mt-4 flex justify-between text-sm">
                    <span className="text-gold-600 font-semibold">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200 p-6 sm:p-8 bg-gray-50 animate-fade-in-up">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-4">Service Details</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">{service.fullDescription}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-4">What's Included</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                      <button
                        onClick={() => {
                          const bookingSection = document.getElementById("booking")
                          if (bookingSection) {
                            bookingSection.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                        className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        Book This Service
                        <Award className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
