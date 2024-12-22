
import AddressSection from "@/components/AddressSection";
import HeroSection from "@/components/HeroSection";
import NavbarSection from "@/components/NavbarSection";
import OurServices from "@/components/OurServices";


export default function Home() {
  return (
    <main>
      <AddressSection />
      <NavbarSection />
      <HeroSection />
      <OurServices/>
    </main>
  )
}