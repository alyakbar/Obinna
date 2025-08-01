"use client"

import { Mail, Phone, Youtube, Instagram, MapPin, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-dm-serif text-xl sm:text-2xl font-bold mb-4">Oga Obinna</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              East Africa's premier entertainer bringing premium content and unforgettable experiences to audiences
              worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@obinnatv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300 min-h-[44px] min-w-[44px]"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://instagram.com/ogaobinna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 min-h-[44px] min-w-[44px]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base min-h-[44px] flex items-center"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base min-h-[44px] flex items-center"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#media")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base min-h-[44px] flex items-center"
                >
                  Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#booking")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base min-h-[44px] flex items-center"
                >
                  Book Obinna
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Get In Touch with Obinna</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Hillcrest Court, Westlands,
                  <br />
                  Nairobi, Kenya
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:bookings@obinnatvstudios.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base min-h-[44px] flex items-center"
                >
                  bookings@obinnatvstudios.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+254798663936"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base min-h-[44px] flex items-center"
                >
                  +254 798 663936
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  <div className="font-medium">Monday - Friday: 9:00 AM - 4:30 PM</div>
                  <div className="font-medium">Saturday: 10:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Oga Obinna. All rights reserved. | Premium Entertainment Services
          </p>
        </div>
      </div>
    </footer>
  )
}
