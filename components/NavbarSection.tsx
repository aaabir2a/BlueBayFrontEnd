"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Menu, Phone } from 'lucide-react'

const demos = [
  {
    title: "Demo 1",
    href: "/demos/1",
    description: "First demo description",
  },
  {
    title: "Demo 2",
    href: "/demos/2",
    description: "Second demo description",
  },
]

const services = [
  {
    title: "IT Consulting",
    href: "/services/consulting",
    description: "Expert IT consulting services",
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud",
    description: "Modern cloud infrastructure",
  },
  {
    title: "Cybersecurity",
    href: "/services/security",
    description: "Advanced security solutions",
  },
]

const pages = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our company",
  },
  {
    title: "Our Team",
    href: "/team",
    description: "Meet our expert team",
  },
]

export default function NavbarSection() {
  return (
    <div className="border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="BlueBay Logo" width={40} height={40} />
          <span className="text-xl font-bold">BlueBayIT</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  HOME
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>



            <NavigationMenuItem>
            <Link href="/About" legacyBehavior passHref>
                <NavigationMenuLink>
                <NavigationMenuTrigger>ABOUT</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {demos.map((demo) => (
                    <ListItem
                      key={demo.title}
                      title={demo.title}
                      href={demo.href}
                    >
                      {demo.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
                </NavigationMenuLink>
              </Link>
              
            </NavigationMenuItem>


            <NavigationMenuItem>
            <Link href="/Services" legacyBehavior passHref>
                <NavigationMenuLink>
                <NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
              
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
                </NavigationMenuLink>
              </Link>
                
            </NavigationMenuItem>


            <NavigationMenuItem>
            <Link href="/Clients" legacyBehavior passHref>
                <NavigationMenuLink>
                <NavigationMenuTrigger>CLIENTS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  {pages.map((page) => (
                    <ListItem
                      key={page.title}
                      title={page.title}
                      href={page.href}
                    >
                      {page.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
                </NavigationMenuLink>
              </Link>
              
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/case-studies" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                 GALLERY
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  PORTFOLIO
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  CONTACT US
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <div className="px-2 py-4 space-y-4">
              <div className="space-y-2">
              <Link
                    href="/"
                    className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                  >
                    HOME
                  </Link>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase">ABOUT</h4>
                  {demos.map((demo) => (
                    <Link
                      key={demo.title}
                      href={demo.href}
                      className="block px-3 py-2 text-sm rounded-md hover:bg-accent"
                    >
                      {demo.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase">Services</h4>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block px-3 py-2 text-sm rounded-md hover:bg-accent"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase">CLIENTS</h4>
                  {pages.map((page) => (
                    <Link
                      key={page.title}
                      href={page.href}
                      className="block px-3 py-2 text-sm rounded-md hover:bg-accent"
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <Link
                    href="/case-studies"
                    className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                  >
                    GALLERY
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                  >
                    PORTFOLIO
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center space-x-2 text-[#0066FF]">
          <Phone className="h-5 w-5" />
          <div className="flex flex-col">
            <span className="text-sm">Call us today!</span>
            <span className="font-bold">+8801861650206</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

