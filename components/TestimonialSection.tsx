"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechVision Inc.",
    content:
      "BlueBay IT Solutions transformed our digital infrastructure completely. Their team's expertise in software development and IT consulting helped us streamline operations and increase efficiency by 40%.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, Global Recruit",
    content:
      "The recruiting management system developed by BlueBay IT has revolutionized how we handle our international recruitment processes. Their attention to detail and understanding of our industry needs was impressive.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "Operations Director, Travel Connect",
    content:
      "We've been working with BlueBay IT for over 3 years now, and their travel automation solutions have been game-changing for our business. Their support team is responsive and always ready to help.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0066FF] rounded-full opacity-10 blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF4B93] rounded-full opacity-10 blur-xl" />

            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Happy Clients"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Testimonial Column */}
          <div>
            <div className="mb-8">
              <h2 className="text-[#0066FF] text-xl font-semibold mb-2">
                TESTIMONIALS
              </h2>
              <h3 className="text-3xl font-bold">What Our Clients Say</h3>
            </div>

            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-200 dark:text-gray-700" />

              <div className="relative z-10">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[200px]"
                >
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={
                          testimonials[activeIndex].avatar || "/placeholder.svg"
                        }
                        alt={testimonials[activeIndex].name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        {testimonials[activeIndex].position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
