import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display, Poppins } from "next/font/google"
import "./globals.css"

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
    title: "Oga Obinna | East Africa's Premier Entertainer",
    description: "Professional entertainer and media personality",
    url: "https://ogaobinna.com",
    siteName: "Oga Obinna",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
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
      </body>
    </html>
  )
}
