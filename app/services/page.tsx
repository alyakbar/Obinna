import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"
import { ServicePackages } from "@/components/service-packages"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServiceDetails />
      <ServicePackages />
      <Booking />
      <Footer />
    </main>
  )
}
