"use client"

import type React from "react"

import { useState } from "react"
import { Mail, X, CheckCircle } from "lucide-react"

export function NewsletterBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")

    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 shadow-luxury">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-amber-400" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm sm:text-base">Stay Updated with Premium Content</h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Get exclusive updates, behind-the-scenes content, and early event access.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 ml-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                  className="w-32 sm:w-48 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 disabled:opacity-50 whitespace-nowrap"
                >
                  {isLoading ? "..." : "Subscribe"}
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Subscribed!</span>
              </div>
            )}

            <button
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="Close newsletter signup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
