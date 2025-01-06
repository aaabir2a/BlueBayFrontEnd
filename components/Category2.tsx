"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react'
import { BASE_URL, GET_IMAGE_BY_without_pagination } from "@/lib/config"

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

const categories = [
  { id: "all", label: "ALL" },
  { id: "rams", label: "RAMS" },
  { id: "pos", label: "POS" },
  { id: "dms", label: "DMS" },
]

interface CategoryProps {
  initialCategory?: string;
  showCategoryButtons?: boolean;
}

export default function Category2({ initialCategory = "all", showCategoryButtons = true }: CategoryProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [portfolioItems, setPortfolioItems] = useState<ContentImage[]>([])
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
        setPortfolioItems(filteredImages)
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
    : portfolioItems.filter(item => item.head.toLowerCase().includes(activeCategory.toLowerCase()))

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {error}
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
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.id}`}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={`${BASE_URL}${item.image}`}
                alt={item.head}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{item.head}</h3>
              <p className="text-gray-500 uppercase text-sm">
                {item.head.split(" ")[0]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

