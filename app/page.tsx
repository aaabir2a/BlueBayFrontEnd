import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import OurPortfolio from "@/components/OurPortfolio";
import OurServices from "@/components/OurServices";
import { Metadata } from "next";
import ClientsSlider from "@/components/ClientsSlider";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "BlueBay IT Solutions - Home",
  description:
    "BlueBay IT Solutions - Your partner for innovative IT solutions",
  openGraph: {
    title: "BlueBay IT Solutions - Home",
    description: "Your partner for innovative IT solutions",
    images: [
      {
        url: "/api/og?title=Home&description=Your partner for innovative IT solutions",
      },
    ],
  },
  twitter: {
    title: "BlueBay IT Solutions - Home",
    description: "Your partner for innovative IT solutions",
    images: [
      "/api/og?title=Home&description=Your partner for innovative IT solutions",
    ],
  },
};



export default async function Home() {
  


  return (
    <main>
      <HeroSection />
      <OurServices/>
      <AboutUs />
      <OurPortfolio />
        <ClientsSlider />
      <TestimonialSection />
    </main>
  );
}
