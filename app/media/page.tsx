import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { MediaHero } from "@/components/media-hero"
import { ShowCategories } from "@/components/show-categories"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Media Gallery | Oga Obinna Shows & Content",
  description:
    "Watch The Obinna Show, The Obinna Show Extra, The Obinnaz, and Zabe. Premium entertainment content from East Africa's top media personality.",
  keywords: "The Obinna Show, Obinna Show Extra, The Obinnaz, Zabe, Oga Obinna videos, East Africa entertainment",
}

export default function MediaPage() {
  return (
    <>
      <Navigation />
      <MediaHero />
      <ShowCategories />
      <Footer />
    </>
  )
}
