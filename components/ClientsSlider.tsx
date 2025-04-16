"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { BASE_URL } from "@/lib/config";

interface ContentImage {
  id: number;
  cms_menu: {
    id: number;
    name: string;
    parent: null;
  };
  head: string;
  image: string;
}

interface ClientsSliderProps {
  clientImages: ContentImage[];
}

export default function ClientsSlider({ clientImages }: ClientsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [duplicatedImages, setDuplicatedImages] = useState<ContentImage[]>([]);

  // Filter and duplicate images for continuous scrolling
  useEffect(() => {
    // Filter images with head="Brand"
    const brandImages = clientImages.filter((img) => img.head === "Brand");
    // Duplicate the images to create a seamless loop
    setDuplicatedImages([...brandImages, ...brandImages]);
  }, [clientImages]);

  // Function to get image name from path
  const getImageName = (imagePath: string): string => {
    const filename = imagePath.split("/").pop() || "";
    return filename
      .split(".")[0]
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .replace(/Logo/gi, "")
      .trim();
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0066FF] text-xl font-semibold mb-2">CLIENTS</h2>
          <h3 className="text-3xl font-bold">Our valuable customers</h3>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900"></div>

          {/* Slider container */}
          <div
            ref={sliderRef}
            className="flex items-center animate-scroll"
            style={{
              animationDuration: `${duplicatedImages.length * 5}s`,
              width: `${duplicatedImages.length * 200}px`,
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-[200px] px-6"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-24 flex items-center justify-center">
                  <div className="relative h-full w-full">
                    <Image
                      src={`${BASE_URL}${image.image}`}
                      alt={getImageName(image.image)}
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
