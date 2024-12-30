"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Category from "@/components/Category";

const projects = [
  {
    id: "poly-world-service",
    title: "Poly World Service",
    category: "rams",
    image: "/recruitment agency management system.svg?height=400&width=600",
    description: "Comprehensive recruitment agency management system",
    href: "#",
  },

  {
    id: "welcome-dmc",
    title: "Welcome D M C",
    category: "dms",
    image: "/welcome.svg?height=400&width=600",
    description: "Digital medical center management system",
    href: "#",
  },

  {
    id: "bashurhat-super-shop",
    title: "Bashurhat Super Shop",
    category: "pos",
    image: "/shop.svg?height=400&width=600",
    description: "Modern point of sale system for retail",
    href: "#",
  },
  {
    id: "bashurhat-super-shop",
    title: "Bashurhat Super Shop",
    category: "pos",
    image: "/shop.svg?height=400&width=600",
    description: "Modern point of sale system for retail",
    href: "#",
  },
  {
    id: "bashurhat-super-shop",
    title: "Bashurhat Super Shop",
    category: "pos",
    image: "/shop.svg?height=400&width=600",
    description: "Modern point of sale system for retail",
    href: "#",
  },
  {
    id: "bashurhat-super-shop",
    title: "Bashurhat Super Shop",
    category: "pos",
    image: "/shop.svg?height=400&width=600",
    description: "Modern point of sale system for retail",
    href: "#",
  },
];

export default function OurPortfolio() {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

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
                  <Drawer
                    open={openDrawer === project.category}
                    onOpenChange={(open) =>
                      setOpenDrawer(open ? project.category : null)
                    }
                  >
                    <DrawerTrigger asChild>
                      <Button variant="link" className="p-0 h-auto">
                        <span className="inline-flex items-center text-[#0066FF] hover:text-[#0052CC] font-medium">
                          MORE DETAILS
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </DrawerTrigger>

                    <DrawerContent
                      className="w-full sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] h-screen sm:max-h-[80vh] 
               mx-auto bg-white p-4 rounded-md"
                    >
                      <DrawerHeader>
                        <DrawerTitle className="text-lg font-bold">
                          {project.category} Projects
                        </DrawerTitle>
                        <DrawerDescription className="text-sm text-gray-500">
                          View all {project.category} projects
                        </DrawerDescription>
                      </DrawerHeader>

                      <div
                        className="p-4 pb-0 
                 
                
                overflow-y-auto 
                sm:max-h-[75vh] md:max-h-[80vh] 
                lg:max-h-[85vh] 
                flex flex-col gap-4"
                      >
                        <Category
                          initialCategory={project.category}
                          showCategoryButtons={false}
                        />
                      </div>

                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto"
                          >
                            Close
                          </Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
