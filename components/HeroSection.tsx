"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FloatingShapes from "./FloatingShapes";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden dark:bg-[#1A1A1A] dark:text-[#FFFFFF]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] via-[#1A1A1A] to-[#0066FF] opacity-20 animate-gradientBackground" />

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-xl text-gray-600 dark:text-[#EAEAEA]">
              Optimize IT Systems
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Creating a better{" "}
              <span className="text-[#0066FF] block">IT solutions</span>
            </h1>
            <p className="text-gray-600 max-w-lg dark:text-[#EAEAEA]">
              Bluebay IT Limited, one of Bangladeshs largest recruiting & travel
              conglomerates, has been a pioneer in providing a global platform
              to the Bangladesh recruiting & Travel industry by enabling access
              to state of the art recruiting & travel automation technology.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 rounded-full text-lg">
                Start Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
