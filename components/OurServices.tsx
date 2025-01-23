"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AppWindow, ArrowDownUp, BadgeEuro, ChevronRight, Satellite, ServerCog, TabletSmartphone } from "lucide-react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import AutoplayPlugin from "embla-carousel-autoplay"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: TabletSmartphone,
    slug: "Software Development",
    href: "/services/Software-Development",
  },
  {
    icon: AppWindow,
    slug: "Web Application",
    href: "/services/Web-Application",
  },
  {
    icon: ArrowDownUp,
    slug: "Domain & Hosting",
    href: "/services/Domain-Hosting",
  },
  {
    icon: BadgeEuro,
    slug: "Digital Marketing",
    href: "/services/Digital-Marketing",
  },
  {
    icon: ServerCog,
    slug: "Dedicated Server Hosting",
    href: "/services/Dedicated-Server-Hosting",
  },
  {
    icon: Satellite,
    slug: "IT Training",
    href: "/services/IT-Training",
  },
]

interface OurServicesProps {
  serviceData: {
    name: string
    value: string
  }[]
}

export default function OurServices({ serviceData }: OurServicesProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    AutoplayPlugin({ delay: 5000, stopOnInteraction: false }),
  ])
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap())
      }
      emblaApi.on("select", onSelect)
      return () => {
        emblaApi.off("select", onSelect)
      }
    }
  }, [emblaApi])

  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const updatedServices = services.map((service) => {
    const matchedMenu = serviceData.find((menu) => menu.name === service.slug)

    return matchedMenu
      ? {
          ...service,
          title: matchedMenu.name,
          description: matchedMenu.value,
        }
      : {
          ...service,
          title: "Default Title",
          description: "Default Description",
        }
  })

  function parseBasicHtml(html: string): React.ReactNode {
    return html
      .replace(/<\/?[^>]+(>|$)/g, "")
      .split(/<p>|<\/p>/g)
      .map((chunk, i) => (chunk ? <span key={i}>{chunk}</span> : null))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#0066FF] text-xl font-semibold mb-4">SERVICES</h2>
          <h3 className="text-4xl font-bold">What we do</h3>
          <div className="w-12 h-1 bg-[#0066FF] mx-auto mt-4" />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {updatedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="flex-[0_0_100%] md:basis-1/2 lg:basis-1/3 min-w-0 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-1"
                  >
                    <Card
                      className={`overflow-hidden border-none shadow-lg relative group transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-gradient-to-br from-[#0066FF] to-[#4D9FFF] text-white"
                          : "hover:bg-gradient-to-br hover:from-[#0066FF] hover:to-[#4D9FFF] hover:text-white"
                      }`}
                    >
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <div
                          className={`mb-6 p-4 rounded-full ${
                            activeIndex === index ? "bg-white/20" : "bg-[#0066FF]/10 group-hover:bg-white/20"
                          }`}
                        >
                          <Icon
                            className={`w-8 h-8 ${
                              activeIndex === index ? "text-white" : "text-[#0066FF] group-hover:text-white"
                            }`}
                          />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                        <div>
                          <p
                            className={`${
                              activeIndex === index ? "text-white/90" : "text-gray-600 group-hover:text-white/90"
                            }`}
                          >
                            {parseBasicHtml(service.description || "")}
                          </p>
                        </div>

                        <Link href={service.href}>
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
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
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
  )
}

