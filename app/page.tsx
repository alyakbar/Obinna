import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { FeaturedBrands } from "@/components/featured-brands"
import { Stats } from "@/components/stats"
import { Media } from "@/components/media"
import { Testimonials } from "@/components/testimonials"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroCarousel />
      <About />
      <Services />
      <FeaturedBrands />
      <Stats />
      <Media />
      <Testimonials />
      <Booking />
      <Footer />
    </>
  )
}
