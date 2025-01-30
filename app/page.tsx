
import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
import OurPortfolio from "@/components/OurPortfolio"
import OurServices from "@/components/OurServices"
import ServiceData from "@/components/ServiceData"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BlueBay IT Solutions - Home",
  description: "BlueBay IT Solutions - Your partner for innovative IT solutions",
  openGraph: {
    title: "BlueBay IT Solutions - Home",
    description: "Your partner for innovative IT solutions",
    images: [{ url: "/api/og?title=Home&description=Your partner for innovative IT solutions" }],
  },
  twitter: {
    title: "BlueBay IT Solutions - Home",
    description: "Your partner for innovative IT solutions",
    images: ["/api/og?title=Home&description=Your partner for innovative IT solutions"],
  },
}

export default async function Home() {
  const serviceData = await ServiceData()

  return (
    <main>
      <HeroSection />
      <OurServices serviceData={serviceData} />
      <AboutUs />
      <OurPortfolio />
    </main>
  )
}

