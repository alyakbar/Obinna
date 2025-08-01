import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { MerchandiseHero } from "@/components/merchandise-hero"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Oga Obinna Merchandise | Official Brand Store",
  description:
    "Shop official Oga Obinna merchandise including apparel, accessories, and exclusive branded items. Premium quality products from East Africa's top entertainer.",
  keywords: "Oga Obinna merchandise, branded apparel, official store, East Africa entertainment merch",
}

export default function MerchandisePage() {
  return (
    <>
      <Navigation />
      <MerchandiseHero />
      <ProductGrid />
      <Footer />
    </>
  )
}
