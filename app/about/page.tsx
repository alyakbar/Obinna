import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { Biography } from "@/components/biography"
import { Timeline } from "@/components/timeline"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Oga Obinna | Biography & Career Journey",
  description:
    "Learn about Oga Obinna's journey from comedy stages to radio waves. Discover the story behind East Africa's premier entertainer and media personality.",
  keywords: "Oga Obinna biography, comedian background, radio host career, East Africa entertainer",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutHero />
      <Biography />
      <Timeline />
      <Skills />
      <Footer />
    </>
  )
}
