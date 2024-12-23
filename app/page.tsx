
import AddressSection from "@/components/AddressSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NavbarSection from "@/components/NavbarSection";
import OurPortfolio from "@/components/OurPortfolio";
import OurServices from "@/components/OurServices";


export default function Home() {
  return (
    <main>
      <AddressSection />
      <NavbarSection />
      <HeroSection />
      <OurServices/>
      <OurPortfolio/>
      <FooterSection/>
    </main>
  )
}