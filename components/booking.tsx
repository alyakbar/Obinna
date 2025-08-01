"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Send,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Mic,
  Star,
  Heart,
  Sparkles,
  Users,
  Music,
  Camera,
  HandHeart,
} from "lucide-react"

// Service definitions with descriptions
const services = [
  {
    id: "event-mc",
    title: "Event MC",
    icon: Mic,
    description: "Host your event with energy, humor, and professionalism.",
  },
  {
    id: "influencing",
    title: "Influencing",
    icon: Star,
    description: "Promote your brand or event through Obinna's social media platforms.",
  },
  {
    id: "apology-package",
    title: "Apology Package",
    icon: Heart,
    description: "A unique and humorous way to send apologies through Obinna's personal delivery.",
  },
  {
    id: "appearance",
    title: "Appearance",
    icon: Sparkles,
    description: "Book Obinna to show up and make your event unforgettable.",
  },
  {
    id: "event-management",
    title: "Event Management",
    icon: Users,
    description: "Full support for planning, coordinating, and executing your event.",
  },
  {
    id: "sound-dj",
    title: "Sound & DJ",
    icon: Music,
    description: "Professional sound setup and DJ services to keep the vibe alive.",
  },
  {
    id: "photography",
    title: "Photography",
    icon: Camera,
    description: "Capture your moments with high-quality photography coverage.",
  },
  {
    id: "meet-greet",
    title: "Meet & Greet",
    icon: HandHeart,
    description: "Book a personal session with Obinna for fans, friends, or clients.",
  },
]

export function Booking() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        eventType: "",
        eventDate: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="booking" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-[#0E0E0E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Book Obinna
          </h2>
        </div>

        {/* Services Grid */}
        <div
          className={`mb-12 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-200`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isExpanded = expandedService === service.id

              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Service Card */}
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full bg-[#3D0066] hover:bg-[#FFD700] text-white hover:text-[#0E0E0E] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-[#0E0E0E] min-h-[120px] flex flex-col items-center justify-center text-center"
                  >
                    <IconComponent className="w-8 h-8 mb-3 transition-colors duration-300" />
                    <h3 className="font-bold text-lg mb-2 transition-colors duration-300">{service.title}</h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Expanded Description */}
                  {isExpanded && (
                    <div className="absolute top-full left-0 right-0 z-10 bg-white border border-gray-200 rounded-xl shadow-xl p-6 mt-2 animate-fade-in-up">
                      <div className="flex items-start gap-3">
                        <IconComponent className="w-6 h-6 text-[#3D0066] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleService(service.id)}
                        className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      >
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Proceed to Booking Button */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-400`}
        >
          <button
            onClick={() => {
              const bookingForm = document.getElementById("booking-form")
              bookingForm?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-3 bg-[#FFD700] hover:bg-[#FFC700] text-[#0E0E0E] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-[#0E0E0E]"
          >
            <Send className="w-5 h-5" />
            Proceed to Booking
          </button>
        </div>

        {/* Booking Form */}
        <div
          id="booking-form"
          className={`max-w-3xl mx-auto transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"} animation-delay-600`}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h3 className="font-dm-serif text-3xl font-bold text-gray-900 mb-4">Ready to Book?</h3>
              <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3D0066] focus:border-[#3D0066] transition-colors duration-300 text-base min-h-[48px]"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3D0066] focus:border-[#3D0066] transition-colors duration-300 text-base min-h-[48px]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3D0066] focus:border-[#3D0066] transition-colors duration-300 text-base min-h-[48px]"
                    >
                      <option value="">Select event type</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Comedy Show">Comedy Show</option>
                      <option value="Radio Appearance">Radio Appearance</option>
                      <option value="Brand Event">Brand Event</option>
                      <option value="Private Party">Private Party</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3D0066] focus:border-[#3D0066] transition-colors duration-300 text-base min-h-[48px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Details & Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3D0066] focus:border-[#3D0066] transition-colors duration-300 resize-none text-base"
                    placeholder="Tell us about your event, expected audience size, venue, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3D0066] hover:bg-[#2A0047] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3D0066] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px] flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Submit Booking Request
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Direct bookings only • No third-party agencies • Response within 24 hours
                </p>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in-up">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-4">Request Sent Successfully!</h3>
                <p className="text-gray-600 text-lg sm:text-xl mb-6">
                  Thank you for your booking request. We'll get back to you within 24 hours with availability and
                  pricing.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md mx-auto">
                  <p className="text-green-800 font-medium">
                    📧 Check your email for confirmation
                    <br />📱 We'll call you to discuss details
                    <br />⭐ Get ready for an amazing event!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
