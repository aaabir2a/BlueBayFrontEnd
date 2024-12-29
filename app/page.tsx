import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import OurPortfolio from "@/components/OurPortfolio";
import OurServices from "@/components/OurServices";


export default function Home() {
  return (
    <main>

      <HeroSection />
      <AboutUs/>
      <OurServices/>
      <OurPortfolio/>

    </main>
  )
}