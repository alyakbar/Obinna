"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Clock, Calendar, Globe } from "lucide-react"

export function ContactInfo() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "booking@ogaobinna.com",
      link: "mailto:booking@ogaobinna.com",
      description: "For booking inquiries and partnerships",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 700 000 000",
      link: "tel:+254700000000",
      description: "Direct line for urgent bookings",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "#",
      description: "Based in East Africa's entertainment hub",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Methods */}
          <div className={`transition-all duration-800 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="font-dm-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <div key={method.title} className="luxury-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">{method.title}</h3>
                        <a
                          href={method.link}
                          className="text-amber-600 hover:text-amber-700 transition-colors duration-300 font-medium text-lg mb-2 block"
                        >
                          {method.value}
                        </a>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Business Hours & Additional Info */}
          <div className={`transition-all duration-800 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <h2 className="font-dm-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Business Hours</h2>

            {/* Business Hours */}
            <div className="luxury-card p-6 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-amber-500" />
                <h3 className="font-semibold text-lg text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Times */}
            <div className="luxury-card p-6 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-amber-500" />
                <h3 className="font-semibold text-lg text-gray-900">Response Times</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Booking Inquiries</div>
                    <div className="text-gray-600 text-sm">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Partnership Proposals</div>
                    <div className="text-gray-600 text-sm">Within 48 hours</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Urgent Requests</div>
                    <div className="text-gray-600 text-sm">Same day response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="luxury-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-6 h-6 text-amber-500" />
                <h3 className="font-semibold text-lg text-gray-900">Service Areas</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">Kenya</div>
                  <div className="text-sm text-gray-600">Primary Market</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">Nigeria</div>
                  <div className="text-sm text-gray-600">Regular Shows</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">East Africa</div>
                  <div className="text-sm text-gray-600">Regional Tours</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">International</div>
                  <div className="text-sm text-gray-600">Special Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
