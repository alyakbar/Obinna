"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Merchandise", href: "/merchandise" },
  { name: "Services", href: "/services" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isHomePage = pathname === "/"

  const handleBookObinnaClick = () => {
    if (isHomePage) {
      const bookingSection = document.getElementById("booking")
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = "/#booking"
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Premium Logo */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <span
                className={`font-dm-serif text-xl sm:text-2xl font-normal transition-all duration-300 tracking-wide ${
                  isScrolled || !isHomePage
                    ? "text-slate-900 group-hover:text-gold-600"
                    : "text-transparent bg-gradient-to-r from-[#F3C623] to-[#FFD700] bg-clip-text group-hover:scale-105"
                }`}
              >
                Oga Obinna
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-poppins text-sm font-medium transition-all duration-300 hover:scale-105 tracking-wide ${
                  pathname === item.href
                    ? "text-gold-600 font-semibold"
                    : isScrolled || !isHomePage
                      ? "text-slate-700 hover:text-gold-600"
                      : "text-white hover:text-gold-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Premium CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleBookObinnaClick}
              className={`font-poppins px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 min-h-[40px] inline-flex items-center tracking-wide ${
                isScrolled || !isHomePage
                  ? "bg-gradient-to-r from-[#F3C623] to-[#FFD700] text-slate-900 hover:shadow-gold-glow hover:scale-105"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-slate-900"
              }`}
            >
              Book Obinna
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isScrolled || !isHomePage ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Premium Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-luxury mt-2 border border-white/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block w-full text-left px-3 py-3 font-poppins text-base font-medium rounded-md min-h-[44px] transition-all duration-200 tracking-wide ${
                    pathname === item.href
                      ? "bg-gold-50 text-gold-700 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-gold-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-200">
                <button
                  onClick={handleBookObinnaClick}
                  className="w-full bg-gradient-to-r from-[#F3C623] to-[#FFD700] text-slate-900 px-3 py-3 rounded-md font-poppins font-semibold text-base min-h-[44px] hover:shadow-gold-glow transition-all duration-200 inline-flex items-center justify-center tracking-wide"
                >
                  Book Obinna
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
