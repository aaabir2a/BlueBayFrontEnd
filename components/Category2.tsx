"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react'
import { BASE_URL, GET_IMAGE_BY_without_pagination } from "@/lib/config"

const categories = [
  { id: "all", label: "ALL" },
  { id: "rams", label: "RAMS" },
  { id: "pos", label: "POS" },
  { id: "dms", label: "DMS" },
  { id: "otms", label: "OTMS" },
  { id: "hrms", label: "HRMS" },
  { id: "e-com", label: "E-COMMERCE" },
]

const portfolioItems = [
  {
    id: "poly-world-service",
    title: "Poly World Service",
    category: "rams",
    description: "Comprehensive recruitment agency management system"
  },
  {
    id: "hrdc",
    title: "H R D C",
    category: "rams",
    description: "Human resource development center management"
  },
  {
    id: "airtrip-international",
    title: "Airtrip International",
    category: "rams",
    description: "International travel and recruitment platform"
  },
  {
    id: "welcome-dmc",
    title: "Welcome D M C",
    category: "dms",
    description: "Digital medical center management system"
  },
  {
    id: "perfect-medicare",
    title: "Perfect Medicare Ltd",
    category: "dms",
    description: "Healthcare facility management solution"
  },
  {
    id: "bashurhat-super-shop",
    title: "Bashurhat Super Shop",
    category: "pos",
    description: "Modern point of sale system for retail"
  },
]

interface ContentImage {
  id: number
  cms_menu: {
    id: number
    name: string
    parent: null
  }
  head: string
  image: string
}

interface CategoryProps {
  initialCategory?: string;
  showCategoryButtons?: boolean;
}

export default function Category({ initialCategory = "all", showCategoryButtons = true }: CategoryProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [portfolioImages, setPortfolioImages] = useState<ContentImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPortfolioImages() {
      try {
        const response = await fetch(GET_IMAGE_BY_without_pagination)
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio images')
        }
        const data = await response.json()
        const filteredImages = data.content_images.filter(
          (img: ContentImage) => img.cms_menu.name === "Portfolio"
        )
        setPortfolioImages(filteredImages)
      } catch (error) {
        console.error('Error fetching portfolio images:', error)
        setError('Failed to load portfolio images')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPortfolioImages()
  }, [])

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div>
      {showCategoryButtons && (
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 bg-gray-100 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-[#00D749] text-white"
                    : "hover:bg-gray-200"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => {
          const portfolioImage = portfolioImages[index % portfolioImages.length]
          
          return (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg">
                {isLoading ? (
                  <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                  </div>
                ) : (
                  <Image
                    src={portfolioImage ? `${BASE_URL}${portfolioImage.image}` : "/placeholder.svg?height=400&width=600"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    View Project
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 uppercase text-sm">{item.category}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

