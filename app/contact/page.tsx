import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { Contact } from "@/components/contact"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact & Booking | Oga Obinna Entertainment",
  description:
    "Get in touch with Oga Obinna for bookings, collaborations, and inquiries. Professional entertainment services across East Africa and beyond.",
  keywords: "Oga Obinna contact, booking inquiries, entertainment services, event booking, collaboration",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactHero />
      <Contact />
      <ContactInfo />
      <Footer />
    </>
  )
}
