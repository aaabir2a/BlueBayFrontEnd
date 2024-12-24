import Link from "next/link"
import {
    AppWindow,
    ArrowDownUp,
    BadgeEuro,
    Satellite,
    ServerCog,
    TabletSmartphone,
  } from "lucide-react";
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: TabletSmartphone,
    title: "Software Development",
    slug: "Software-Development",
    description: " To develop a desired application.",
    href: "/services/Software-Development",
  },
  {
    icon: AppWindow,
    title: "Web Application",
    slug: "Web-Application",
    description: "Custom Web App Development",
    href: "/services/Web-Application",
  },
  {
    icon: ArrowDownUp,
    title: "Domain & Hosting",
    slug: "Domain-Hosting",
    description: "Reliable Domain & Hosting Solutions",
    href: "/services/Domain-Hosting",
  },
  {
    icon: BadgeEuro,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic Online Marketing Solutions",
    href: "/services/digital-marketing",
  },
  {
    icon: ServerCog,
    title: "Dedicated Server Hosting",
    slug: "Dedicated-Server-Hosting",
    description: "Secure Dedicated Server Hosting",
    href: "/services/Dedicated-Server-Hosting",
  },
  {
    icon: Satellite,
    title: "IT Training",
    slug: "IT-Training",
    description: "Expert IT Skills Training",
    href: "/services/IT-Training",
  },
]

export default function ServiceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#0066FF]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-colors"
                >
                  <Link href={service.href}>Read More</Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

