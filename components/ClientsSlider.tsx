"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { BASE_URL, GET_CLIENTS } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Loader2 } from "lucide-react"

interface Client {
  id: number
  name: string
  serial_number: number
  image: string
}

export default function ClientsSlider() {
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)
  const speedRef = useRef(0.5) // pixels per frame

  // Fetch clients data
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(GET_CLIENTS)
        if (!response.ok) {
          throw new Error("Failed to fetch clients")
        }
        const data = await response.json()
        if (data && data.clients) {
          // Sort by serial_number
          const sortedClients = [...data.clients].sort((a, b) => a.serial_number - b.serial_number)
          // Duplicate the clients for continuous scrolling
          setClients([...sortedClients, ...sortedClients])
        }
      } catch (err) {
        console.error("Error fetching clients:", err)
        setError("Failed to load clients")
      } finally {
        setIsLoading(false)
      }
    }

    fetchClients()
  }, [])

  // Set up continuous scrolling animation
  useEffect(() => {
    if (isLoading || error || !sliderRef.current || clients.length === 0) return

    const slider = sliderRef.current
    let lastTime = 0
    let scrollPosition = 0

    const animate = (time: number) => {
      if (lastTime === 0) {
        lastTime = time
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const deltaTime = time - lastTime
      lastTime = time

      if (!isPaused && slider) {
        scrollPosition += (speedRef.current * deltaTime) / 16 // Normalize to ~60fps

        // Reset when we've scrolled half the content (since we duplicated it)
        if (scrollPosition >= slider.scrollWidth / 2) {
          scrollPosition = 0
        }

        slider.scrollLeft = scrollPosition
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isLoading, error, clients, isPaused])

  const scrollLeft = () => {
    if (sliderRef.current) {
      const newPosition = Math.max(0, sliderRef.current.scrollLeft - 500)
      sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      const newPosition = sliderRef.current.scrollLeft + 500
      sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" })
    }
  }

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#0066FF] text-xl font-semibold mb-4">CLIENTS</h2>
            <h3 className="text-4xl font-bold relative inline-block pb-4">
              Our <span className="font-normal">valuable customers</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0091cb]" />
            </h3>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[#0066FF]" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#0066FF] text-xl font-semibold mb-4">CLIENTS</h2>
            <h3 className="text-4xl font-bold relative inline-block pb-4">
              Our <span className="font-normal">valuable customers</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0091cb]" />
            </h3>
          </div>
          <div className="text-center text-red-500 py-8">{error}</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0066FF] text-xl font-semibold mb-4">CLIENTS</h2>
          <h3 className="text-4xl font-bold relative inline-block pb-4">
            Our <span className="font-normal">valuable customers</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0091cb]" />
          </h3>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900"></div>

          {/* Slider container */}
          <div
            ref={sliderRef}
            className="flex items-center overflow-x-auto scrollbar-hide py-4"
            style={{ scrollBehavior: "smooth" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {clients.map((client, index) => (
              <div key={`${client.id}-${index}`} className="flex-shrink-0 w-[250px] px-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-[250px] flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="relative h-full w-full">
                    <Image
                      src={`${BASE_URL}${client.image}`}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="250px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 hover:bg-white shadow-md"
            onClick={() => {
              scrollLeft()
              setIsPaused(true)
              setTimeout(() => setIsPaused(false), 2000)
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 hover:bg-white shadow-md"
            onClick={() => {
              scrollRight()
              setIsPaused(true)
              setTimeout(() => setIsPaused(false), 2000)
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
