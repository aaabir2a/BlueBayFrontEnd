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
import { Menu} from 'lucide-react'
import { ModeToggle } from "./DarkMode"
import { AppWindow, ArrowDownUp, BadgeEuro, Satellite, ServerCog, TabletSmartphone } from 'lucide-react';



const services = [
  {
    title: "Software Development",
    href: "/services/Software-Development",
    description: " To develop a desired application.",
    icon: TabletSmartphone,
  },
  {
    title: "Web Application",
    href: "/services/Web-Application",
    description: "Custom Web App Development",
    icon: AppWindow,
  },
  {
    title: "Domain & Hosting",
    href: "/services/Domain-Hosting",
    description: "Reliable Domain & Hosting Solutions",
    icon: ArrowDownUp,
  },
  {
    title: "Digital Marketing",
    href: "/services/Digital-Marketing",
    description: "Strategic Online Marketing Solutions",
    icon: BadgeEuro,
  },
  {
    title: "Dedicated Server Hosting",
    href: "/services/Dedicated-Server-Hosting",
    description: "Secure Dedicated Server Hosting",
    icon: ServerCog,
  },
  {
    title: "IT Training",
    href: "/services/IT-Training",
    description: "Expert IT Skills Training",
    icon: Satellite,
  },
];


export default function NavbarSection() {
  return (
    <div className="sticky top-0 z-50 bg-white border-b dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="BlueBay Logo" width={150} height={90} />
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  ABOUT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/services">
                <NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <ListItem
                        key={service.title}
                        title={
                          <span className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-[#0066FF]" />
                            {service.title}
                          </span>
                        }
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  PORTFOLIO
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/Clients" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  CLIENTS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  GALLERY
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contactus" legacyBehavior passHref>
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
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <nav className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                <Link
                  href="/"
                  className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                >
                  HOME
                </Link>
                <Link
                  href="/About"
                  className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                >
                  ABOUT
                </Link>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase px-3 py-2">Services</h4>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block px-6 py-2 text-sm rounded-md hover:bg-accent"
                    >
                      <span className="flex items-center gap-2">
                        <service.icon className="h-4 w-4 text-[#0066FF]" />
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/portfolio"
                  className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                >
                  PORTFOLIO
                </Link>
                <Link
                  href="/Clients"
                  className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                >
                  CLIENTS
                </Link>
                <Link
                  href="/gallery"
                  className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                >
                  GALLERY
                </Link>
                <Link
                  href="/contactus"
                  className="block px-3 py-2 text-sm font-bold uppercase rounded-md hover:bg-accent"
                >
                  CONTACT US
                </Link>
              </div>
              <div className="border-t p-4">
                <ModeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

interface ListItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "title"> {
  title: React.ReactNode;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<typeof Link>, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

