import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import OurPortfolio from "@/components/OurPortfolio";
import OurServices from "@/components/OurServices";
import ServiceData from "@/components/ServiceData";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
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

async function getClientImages() {
  try {
    const response = await fetch(
      `${BASE_URL}/cms_menu_content_image/api/v1/cms_menu_content_image/without_pagination/all/`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch client images");
    }
    const data = await response.json();
    return data.content_images;
  } catch (error) {
    console.error("Error fetching client images:", error);
    return [];
  }
}

export default async function Home() {
  const serviceData = await ServiceData();
  const clientImages = await getClientImages();

  return (
    <main>
      <HeroSection />
      <OurServices serviceData={serviceData} />
      <AboutUs />
      <OurPortfolio />
      <ClientsSlider clientImages={clientImages} />
      <TestimonialSection />
    </main>
  );
}
