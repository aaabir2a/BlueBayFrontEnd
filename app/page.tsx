
import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
import OurPortfolio from "@/components/OurPortfolio"
import OurServices from "@/components/OurServices"
import ServiceData from "@/components/ServiceData"

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

