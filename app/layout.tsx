import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display, Poppins } from "next/font/google"
import "./globals.css"
import ObinnaBot from "@/components/ObinnaBot"

// Premium font pairing for celebrity brand
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Oga Obinna | East Africa's Premier Entertainer",
  description:
    "Professional entertainer, comedian, radio host, and content creator. Book premium entertainment services for your events.",
  keywords: "Oga Obinna, comedian, radio host, MC, entertainment, Kenya, Nigeria",
  openGraph: {
    title: "OgaObinna | East Africa's Premier Entertainer",
    description: "Professional entertainer and media personality",
    url: "https://ogaobinna.com",
    siteName: "OgaObinna",
    locale: "en_US",
    type: "website", // path to your favicon in public/
  },
    icons: {
    icon: '/favicon.jpg', // Pointing to your .jpg image
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-inter antialiased bg-white text-gray-900 selection:bg-gold-400/20 selection:text-gold-900">
        {children}
        <ObinnaBot />
      </body>
    </html>
  )
}
