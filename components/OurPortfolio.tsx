import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const projects = [
  {
    category: "RAMS",
    title: "Recruiting Agency Management System(RAMS)",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "DMS",
    title: "Digital Medical System (DMS)",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "OTMS",
    title: "Online Travel Management Systems (OTMS)",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "HRMS",
    title: "Human Resources Management System",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "E-COMMERCE",
    title: "E-Commerce is a online base product shop",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "POS",
    title: "Point of Sale is a complete online base software",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
];

export default function OurPortfolio() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#0066FF] text-xl font-semibold mb-4">
            OUR PORTFOLIO
          </h2>
          <h3 className="text-4xl font-bold">
            Latest & <span className="font-normal">Greatest Project</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-4 line-clamp-2">
                    {project.title}
                  </h4>
                  <Popover>
                    <PopoverTrigger>
                    MORE DETAILS
                    <ArrowRight className="ml-2 h-4 w-4" />
                    </PopoverTrigger>
                    <PopoverContent>
                      Place content for the popover here.
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
