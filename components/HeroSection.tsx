"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { BASE_URL, GET_HOMEPAGE_SLIDER } from "@/lib/config"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Update the interface to handle multiple sliders
interface HomepageSlider {
  id: number
  title: string
  subtitle: string
  image: string
  details: string
}

export default function HeroSection() {
  const [sliderData, setSliderData] = useState<HomepageSlider[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch(GET_HOMEPAGE_SLIDER)
        if (!response.ok) {
          throw new Error("Failed to fetch slider data")
        }
        const data = await response.json()
        setSliderData(data.homepage_sliders)
      } catch (err) {
        console.error("Error fetching slider data:", err)
        setError("Failed to load content")
      } finally {
        setIsLoading(false)
      }
    }

    fetchSliderData()
  }, [])

  // Function to safely parse HTML content
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent }
  }

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1))
  }, [sliderData.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1))
  }

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, sliderData, nextSlide])

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0066FF] to-[#1A1A1A] dark:bg-[#1A1A1A] dark:text-[#FFFFFF] min-h-[600px]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Icons - Enhanced with more icons and better positioning */}
      {/* Top Left */}
      <div className="absolute left-10 top-10 animate-float-slow z-20">
        <div className="text-[#0066FF] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Top Right */}
      <div className="absolute right-10 top-20 animate-float-medium z-20">
        <div className="text-[#00FFFF] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M12 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Middle Left - Near Title */}
      <div className="absolute left-5 top-1/3 animate-float z-20">
        <div className="text-[#FF00FF] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Left */}
      <div className="absolute left-20 bottom-20 animate-float-slow z-20">
        <div className="text-[#FFA500] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12H15V22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="absolute right-40 bottom-40 animate-float-medium z-20">
        <div className="text-[#00FF00] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Near Details Text */}
      <div className="absolute left-40 bottom-10 animate-float z-20">
        <div className="text-[#FF6347] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" />
            <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Top of Image */}
      <div className="absolute right-20 top-10 animate-float-slow z-20">
        <div className="text-[#1E90FF] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom of Image */}
      <div className="absolute right-10 bottom-10 animate-float-medium z-20">
        <div className="text-[#7B68EE] bg-white/10 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-2 md:px-4 py-8 md:py-16 relative z-30">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-24 bg-gray-300 rounded w-full"></div>
          </div>
        ) : error ? (
          <div className="text-center text-white">
            <p>{error}</p>
          </div>
        ) : (
          <div className="relative">
            {/* Slider Content */}
            <div key={currentSlide} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-8 z-10 px-4 md:px-0">
                {/* Title with animation */}
                <div
                  className="text-left text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fadeInUp"
                  style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
                  dangerouslySetInnerHTML={createMarkup(sliderData[currentSlide]?.title || "")}
                />

                {/* Subtitle with animation */}
                <div
                  className="opacity-0 animate-fadeInUp"
                  style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                >
                  <p className="text-gray-100 text-xl md:text-2xl font-semibold max-w-lg">
                    {sliderData[currentSlide]?.subtitle || ""}
                  </p>
                </div>

                {/* Details with animation */}
                <div
                  className="opacity-0 animate-fadeInUp"
                  style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
                >
                  <p className="text-gray-200 max-w-lg text-base md:text-lg">
                    {sliderData[currentSlide]?.details || ""}
                  </p>
                </div>
              </div>

              {/* Image with animation */}
              <div
                className="relative overflow-hidden rounded-lg opacity-0 animate-fadeInRight z-10"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                <div className="absolute inset-0 bg-[#0066FF] opacity-10 blur-3xl transform scale-150" />
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <Image
                    src={
                      sliderData[currentSlide]?.image
                        ? `${BASE_URL}${sliderData[currentSlide].image}`
                        : "/Herosection.svg"
                    }
                    alt="IT Professional"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2 md:px-4">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 text-white p-1 md:p-2 rounded-full transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 text-white p-1 md:p-2 rounded-full transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 mx-1 rounded-full transition-all ${
                    currentSlide === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
