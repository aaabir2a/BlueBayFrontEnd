"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import FloatingShapes from "./FloatingShapes";
import { BASE_URL, GET_HOMEPAGE_SLIDER } from "@/lib/config";

interface HomepageSlider {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  details: string;
}

export default function HeroSection() {
  const [sliderData, setSliderData] = useState<HomepageSlider | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch(GET_HOMEPAGE_SLIDER);
        if (!response.ok) {
          throw new Error("Failed to fetch slider data");
        }
        const data = await response.json();
        setSliderData(data.homepage_slider);
      } catch (err) {
        console.error("Error fetching slider data:", err);
        setError("Failed to load content");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  // Function to safely parse HTML content
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <div className="relative overflow-hidden dark:bg-[#1A1A1A] dark:text-[#FFFFFF]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] via-[#1A1A1A] to-[#0066FF] opacity-20 animate-gradientBackground" />

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-24 bg-gray-300 rounded w-full"></div>
              </div>
            ) : error ? (
              <>
                <h2 className="text-xl text-gray-600 dark:text-[#EAEAEA]">
                  Optimize IT Systems
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Creating a better{" "}
                  <span className="text-[#0066FF] block">IT solutions</span>
                </h1>
                <p className="text-gray-600 max-w-lg dark:text-[#EAEAEA]">
                  Bluebay IT Limited, one of Bangladesh&apos;s largest
                  recruiting & travel conglomerates, has been a pioneer in
                  providing a global platform to the Bangladesh recruiting &
                  Travel industry by enabling access to state of the art
                  recruiting & travel automation technology.
                </p>
              </>
            ) : (
              <>
                {/* Title - Using dangerouslySetInnerHTML to render HTML content from API */}
                <div
                  className="text-left
 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  dangerouslySetInnerHTML={createMarkup(
                    sliderData?.title || ""
                  )}
                />

                {/* Subtitle */}
                <p className="text-gray-600 max-w-lg dark:text-[#EAEAEA]">
                  {sliderData?.subtitle || ""}
                </p>
              </>
            )}
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#0066FF] rounded-full opacity-10 blur-3xl transform scale-150" />
            <Image
              src={
                sliderData?.image
                  ? `${BASE_URL}${sliderData.image}`
                  : "/Herosection.svg"
              }
              alt="IT Professional"
              width={600}
              height={600}
              className="relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
