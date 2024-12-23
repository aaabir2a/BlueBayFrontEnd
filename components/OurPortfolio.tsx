
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {  Briefcase, Code } from "lucide-react";

// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";


const projects = [
  {
    category: "RAMS",
    title: "Recruiting Agency Management System(RAMS)",
    image: "/rams.svg?height=400&width=600",
    href: "/google.com",
  },
  {
    category: "DMS",
    title: "Digital Medical System (DMS)",
    image: "/DMS.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "OTMS",
    title: "Online Travel Management Systems (OTMS)",
    image: "/OTMS.png?height=400&width=600",
    href: "#",
  },
  {
    category: "HRMS",
    title: "Human Resources Management System",
    image: "/HRMS.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "E-COMMERCE",
    title: "E-Commerce is a online base product shop",
    image: "/E-COMMERCE.svg?height=400&width=600",
    href: "#",
  },
  {
    category: "POS",
    title: "Point of Sale is a complete online base software",
    image: "/POS.svg?height=400&width=600",
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
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">More Details</Button>
                    </DrawerTrigger>
                    <DrawerContent className="w-full sm:max-w-screen-sm mx-auto p-4">
                      <div className="mx-auto w-full">
                        <DrawerHeader className="text-center">
                          <DrawerTitle className="text-lg font-semibold">
                            Move Goal
                          </DrawerTitle>
                          <DrawerDescription className="text-sm text-muted-foreground">
                            Set your daily activity goal.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div>
                          {/* Title and Icon */}
                          <div className="flex items-center space-x-4 mb-4">
                            <Briefcase className="w-10 h-10 text-[#0066FF]" />
                            <h2 className="text-2xl font-bold text-gray-800">
                              Recruiting Agency Management System
                            </h2>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed mb-4">
                            A comprehensive solution for managing recruitment
                            processes, client relationships, and job placements
                            seamlessly. Streamline operations and improve
                            efficiency with RAMS.
                          </p>

                          {/* Technologies Used */}
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-2">
                              <Code className="w-5 h-5 text-[#0066FF] mr-2" />
                              Technologies Used
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              <li>Next.js</li>
                              <li>React</li>
                              <li>Python</li>
                              <li>Django</li>
                            </ul>
                          </div>
                        </div>
                        <DrawerFooter className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                          <Link href={project.href}>
                            <Button className="w-full sm:w-auto">VISIT</Button>
                          </Link>
                          <DrawerClose asChild>
                            <Button
                              variant="outline"
                              className="w-full sm:w-auto"
                            >
                              Cancel
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
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
