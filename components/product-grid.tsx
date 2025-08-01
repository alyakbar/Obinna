"use client"

import { useState, useEffect, useRef } from "react"
import { ShoppingCart, Star } from "lucide-react"

export function ProductGrid() {
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

  const products = [
    {
      id: 1,
      name: "Oga Obinna Signature T-Shirt",
      price: "KSh 2,500",
      image: "/placeholder.svg?height=300&width=300&text=T-Shirt",
      rating: 4.8,
      reviews: 124,
      category: "Apparel",
    },
    {
      id: 2,
      name: "Premium Hoodie",
      price: "KSh 4,500",
      image: "/placeholder.svg?height=300&width=300&text=Hoodie",
      rating: 4.9,
      reviews: 89,
      category: "Apparel",
    },
    {
      id: 3,
      name: "Branded Cap",
      price: "KSh 1,800",
      image: "/placeholder.svg?height=300&width=300&text=Cap",
      rating: 4.7,
      reviews: 156,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Coffee Mug",
      price: "KSh 1,200",
      image: "/placeholder.svg?height=300&width=300&text=Mug",
      rating: 4.6,
      reviews: 78,
      category: "Accessories",
    },
    {
      id: 5,
      name: "Phone Case",
      price: "KSh 1,500",
      image: "/placeholder.svg?height=300&width=300&text=Phone+Case",
      rating: 4.8,
      reviews: 92,
      category: "Accessories",
    },
    {
      id: 6,
      name: "Tote Bag",
      price: "KSh 2,000",
      image: "/placeholder.svg?height=300&width=300&text=Tote+Bag",
      rating: 4.7,
      reviews: 67,
      category: "Accessories",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Premium Collection
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            High-quality merchandise designed to represent the Oga Obinna brand with style and authenticity
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`luxury-card overflow-hidden group transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 flex items-center space-x-2 min-h-[40px]">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="luxury-card p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-dm-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Store Coming Soon</h3>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Our official merchandise store is launching soon. Be the first to know when premium Oga Obinna products
              become available.
            </p>
            <button className="bg-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 min-h-[48px] inline-flex items-center">
              Notify Me When Available
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
