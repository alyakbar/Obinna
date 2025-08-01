"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="section-padding bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
                <h2 className="font-dm-serif text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                  Stay Connected with Premium Content
                </h2>
                <p className="text-xl text-white/90 text-balance">
                  Get exclusive updates, behind-the-scenes content, and early access to events. Join thousands of fans
                  in the Oga Obinna community.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>

              <p className="text-white/70 text-sm mt-4">No spam, unsubscribe at any time. Your privacy is protected.</p>
            </>
          ) : (
            <div className="animate-fade-in-up">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="font-dm-serif text-4xl font-bold text-white mb-4">Welcome to the Community!</h2>
              <p className="text-xl text-white/90">
                Thank you for subscribing. You'll receive premium content and updates soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
