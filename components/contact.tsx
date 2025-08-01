"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Send, Calendar, Clock, CheckCircle } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        phone: "",
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "booking@ogaobinna.com",
      link: "mailto:booking@ogaobinna.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 700 000 000",
      link: "tel:+254700000000",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "#",
    },
  ]

  const eventTypes = [
    "Corporate Event",
    "Wedding",
    "Birthday Party",
    "Product Launch",
    "Conference",
    "Comedy Show",
    "Radio Appearance",
    "Other",
  ]

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-slate-900">
      <div className="container-max">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Book Oga Obinna
          </div>

          <h2 className="font-dm-serif text-4xl lg:text-6xl font-bold text-white mb-6">
            Let's Create Something
            <span className="gradient-text"> Amazing</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your event with premium entertainment? Get in touch to discuss your requirements and
            receive a personalized quote for your upcoming occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="luxury-card p-8">
              {!isSubmitted ? (
                <>
                  <h3 className="font-dm-serif text-2xl font-bold text-slate-900 mb-6">Book Your Event</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                          placeholder="+254 700 000 000"
                        />
                      </div>

                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-slate-700 mb-2">
                          Event Type *
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Event Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 resize-none"
                        placeholder="Tell us about your event, expected audience size, venue, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Booking Request
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-dm-serif text-2xl font-bold text-slate-900 mb-4">Request Sent Successfully!</h3>
                  <p className="text-slate-600">
                    Thank you for your booking request. We'll get back to you within 24 hours with a personalized quote
                    and availability confirmation.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & Quick Details */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            {/* Contact Information */}
            <div className="premium-card p-8">
              <h3 className="font-dm-serif text-2xl font-bold text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={info.title} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium">{info.title}</div>
                        <a
                          href={info.link}
                          className="text-white hover:text-amber-400 transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Response Times */}
            <div className="premium-card p-8">
              <h3 className="font-dm-serif text-xl font-bold text-white mb-6">Response Times</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-white font-medium">Booking Inquiries</div>
                    <div className="text-slate-400 text-sm">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-white font-medium">Event Confirmation</div>
                    <div className="text-slate-400 text-sm">Within 48 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-white font-medium">Urgent Requests</div>
                    <div className="text-slate-400 text-sm">Same day response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Notice */}
            <div className="luxury-card p-6 border-l-4 border-amber-500">
              <h4 className="font-semibold text-slate-900 mb-2">Booking Notice</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                For optimal availability and planning, we recommend booking at least 2-4 weeks in advance. Rush bookings
                may be accommodated based on availability with additional fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
