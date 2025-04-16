"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoplayPlugin from "embla-carousel-autoplay";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BASE_URL, GET_SERVICE_SLIDER } from "@/lib/config";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ServiceSlider {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  details: string;
  serial_number: number;
  slug?: string;
}

interface OurServicesProps {
  serviceData: {
    name: string;
    value: string;
  }[];
}

export default function OurServices({ serviceData }: OurServicesProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [AutoplayPlugin({ delay: 5000, stopOnInteraction: false })]
  );
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [serviceSliders, setServiceSliders] = useState<ServiceSlider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch service slider data
  useEffect(() => {
    const fetchServiceSliders = async () => {
      try {
        const response = await fetch(GET_SERVICE_SLIDER);
        if (!response.ok) {
          throw new Error("Failed to fetch service sliders");
        }
        const data = await response.json();
        if (data && data.service_sliders) {
          // Sort by serial_number
          const sortedSliders = [...data.service_sliders].sort(
            (a, b) => a.serial_number - b.serial_number
          );
          setServiceSliders(sortedSliders);
        }
      } catch (err) {
        console.error("Error fetching service sliders:", err);
        setError("Failed to load services");
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceSliders();
  }, []);

  React.useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // Fallback services data if API fails
  const fallbackServices = [
    {
      id: 1,
      serial_number: 1,
      title: "Software Development",
      details:
        "Expert software development services tailored to your business needs.",
      image: "/placeholder.svg?height=100&width=100",
      slug: "Software-Development",
    },
    {
      id: 2,
      serial_number: 2,
      title: "Web Application",
      details: "Custom web applications built with modern technologies.",
      image: "/placeholder.svg?height=100&width=100",
      slug: "Web-Application",
    },
    {
      id: 3,
      serial_number: 3,
      title: "Domain & Hosting",
      details: "Reliable domain and hosting solutions for your business.",
      image: "/placeholder.svg?height=100&width=100",
      slug: "Domain-Hosting",
    },
    {
      id: 4,
      serial_number: 4,
      title: "Digital Marketing",
      details: "Strategic digital marketing to grow your online presence.",
      image: "/placeholder.svg?height=100&width=100",
      slug: "Digital-Marketing",
    },
    {
      id: 5,
      serial_number: 5,
      title: "Dedicated Server Hosting",
      details: "High-performance dedicated server hosting solutions.",
      image: "/placeholder.svg?height=100&width=100",
      slug: "Dedicated-Server-Hosting",
    },
    {
      id: 6,
      serial_number: 6,
      title: "IT Training",
      details: "Professional IT training programs for individuals and teams.",
      image: "/placeholder.svg?height=100&width=100",
      slug: "IT-Training",
    },
  ];

  // Use API data if available, otherwise use fallback
  const displayServices =
    serviceSliders.length > 0 ? serviceSliders : fallbackServices;

  // Generate href based on title if slug is not available
  const getServiceHref = (service: ServiceSlider) => {
    if (service.slug) {
      return `/services/${service.slug}`;
    }
    // Convert title to slug format
    return `/services/${service.slug}`;
  };

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-6 bg-gray-300 rounded w-32 mx-auto mb-4"></div>
            <div className="h-10 bg-gray-300 rounded w-64 mx-auto"></div>
            <div className="w-12 h-1 bg-gray-300 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-8 h-64 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#0066FF] text-xl font-semibold mb-4">
            SERVICES
          </h2>
          <h3 className="text-4xl font-bold">What we do</h3>
          <div className="w-12 h-1 bg-[#0066FF] mx-auto mt-4" />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {displayServices.map((service, index) => {
              return (
                <div
                  key={service.id}
                  className="flex-[0_0_100%] md:basis-1/2 lg:basis-1/3 min-w-0 pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-1"
                  >
                    <Card
                      className={`overflow-hidden border-none shadow-lg relative group transition-all duration-300 h-25 ${
                        activeIndex === index
                          ? "bg-gradient-to-br from-[#0066FF] to-[#4D9FFF] text-white"
                          : "hover:bg-gradient-to-br hover:from-[#0066FF] hover:to-[#4D9FFF] hover:text-white"
                      }`}
                    >
                      <CardContent className="flex flex-col justify-between items-center text-center p-6 h-full">
                        <div className="mb-6 w-24 h-24 relative">
                          <Image
                            src={
                              service.image.startsWith("/media")
                                ? `${BASE_URL}${service.image}`
                                : service.image
                            }
                            alt={service.title}
                            width={96}
                            height={96}
                            className="object-contain"
                          />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">
                          {service.title}
                        </h4>
                        <div className="overflow-hidden h-20">
                          <p
                            className={`${
                              activeIndex === index
                                ? "text-white/90"
                                : "text-gray-600 group-hover:text-white/90"
                            }`}
                          >
                            {service.details}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Link href={getServiceHref(service)}>
                            <Button
                              variant="outline"
                              size="icon"
                              className={`${
                                activeIndex === index
                                  ? "text-[#f26649] group-hover:text-[#f26649]"
                                  : "text-gray-600 group-hover:text-[#008fca]"
                              }`}
                            >
                              <ChevronRight />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {displayServices.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? "bg-[#0066FF] w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
