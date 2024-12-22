"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  PresentationIcon as PresentationChart,
  Shield,
  Users,
} from "lucide-react";

const services = [
  {
    icon: PresentationChart,
    title: "Business Reform",
    description:
      "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",
  },
  {
    icon: Shield,
    title: "Firewall Advance",
    description:
      "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",
  },
  {
    icon: Users,
    title: "IT Management",
    description:
      "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",
  },

  {
    icon: Users,
    title: "IT Management",
    description:
      "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",
  },

  {
    icon: Users,
    title: "IT Management",
    description:
      "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",
  },

  {
    icon: Users,
    title: "IT Management",
    description:
      "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",
  },

  {
    icon: Users,
    title: "IT Management",
    description:
      "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % services.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className="py-20 px-4">
      <section className="text-center py-10 px-4">
        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
          OUR SERVICES
        </h4>
        <h1 className="text-4xl font-bold mb-2">Our Service is equipped</h1>
        <h2 className="text-xl text-gray-700">with exclusive features.</h2>
      </section>
      <div className="container mx-auto">

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card
                      className={`relative group transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-gradient-to-br from-[#0066FF] to-[#4D9FFF] text-white"
                          : "hover:bg-gradient-to-br hover:from-[#0066FF] hover:to-[#4D9FFF] hover:text-white"
                      }`}
                    >
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <div
                          className={`mb-6 p-4 rounded-full ${
                            activeIndex === index
                              ? "bg-white/20"
                              : "bg-[#0066FF]/10 group-hover:bg-white/20"
                          }`}
                        >
                          <Icon
                            className={`w-8 h-8 ${
                              activeIndex === index
                                ? "text-white"
                                : "text-[#0066FF] group-hover:text-white"
                            }`}
                          />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">
                          {service.title}
                        </h4>
                        <p
                          className={`${
                            activeIndex === index
                              ? "text-white/90"
                              : "text-gray-600 group-hover:text-white/90"
                          }`}
                        >
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious onClick={handlePrev} />
          <CarouselNext onClick={handleNext} />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all focus:ring-2 ${
                activeIndex === index ? "bg-[#0066FF] w-8" : "bg-gray-300"
              }`}
              
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
