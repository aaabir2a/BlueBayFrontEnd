"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BASE_URL, GET_PORTFOLIO_CATEGORIES, GET_PORTFOLIO_BY_CATEGORY, GET_ALL_PORTFOLIOS } from "@/lib/config"
import { Loader2 } from "lucide-react"

interface PortfolioCategory {
  id: number
  name: string
}

interface Portfolio {
  id: number
  title: string
  slug: string | null
  description: string
  image: string
  category: number
}

interface Category2Props {
  initialCategory?: string | number
  showCategoryButtons?: boolean
  portfolioImages?: { url: string; alt: string }[] // Kept for backward compatibility
}

export default function Category2({
  initialCategory = "all",
  showCategoryButtons = true,
}: Category2Props) {
  const [categories, setCategories] = useState<PortfolioCategory[]>([])
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [activeCategory, setActiveCategory] = useState<string | number>(initialCategory)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(GET_PORTFOLIO_CATEGORIES)
        if (!response.ok) {
          throw new Error("Failed to fetch categories")
        }
        const data = await response.json()
        if (data && data.portfolio_categories) {
          setCategories(data.portfolio_categories)
        }
      } catch (err) {
        console.error("Error fetching categories:", err)
        setError("Failed to load categories")
      }
    }

    fetchCategories()
  }, [])

  // Fetch portfolios based on active category
  useEffect(() => {
    const fetchPortfolios = async () => {
      setIsLoading(true)
      try {
        let url = GET_ALL_PORTFOLIOS
        if (activeCategory !== "all" && typeof activeCategory === "number") {
          url = GET_PORTFOLIO_BY_CATEGORY(activeCategory)
        }

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Failed to fetch portfolios")
        }
        const data = await response.json()
        if (data && data.portfolios) {
          setPortfolios(data.portfolios)
        }
      } catch (err) {
        console.error("Error fetching portfolios:", err)
        setError("Failed to load portfolios")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPortfolios()
  }, [activeCategory])

  // Handle category change
  const handleCategoryChange = (categoryId: string | number) => {
    setActiveCategory(categoryId)
  }

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
        <div className="sticky top-20 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 shadow-sm">
          <div className="flex justify-center">
            <div className="inline-flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto max-w-full">
              <button
                onClick={() => handleCategoryChange("all")}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                  activeCategory === "all" ? "bg-[#00D749] text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700",
                )}
              >
                ALL
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                    activeCategory === category.id
                      ? "bg-[#00D749] text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700",
                  )}
                >
                  {category.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-10 h-10 animate-spin text-[#0066FF]" />
        </div>
      ) : (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.length > 0 ? (
            portfolios.map((portfolio) => {
              const portfolioUrl = portfolio.slug ? `/portfolio/${portfolio.slug}` : `/portfolio/${portfolio.id}`

              return (
                <Link key={portfolio.id} href={portfolioUrl} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    {/* Reduced image size with aspect-square */}
                    <Image
                      src={`${BASE_URL}${portfolio.image}`}
                      alt={portfolio.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">View Project</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{portfolio.title}</h3>
                    <p className="text-gray-500 uppercase text-sm">
                      {categories.find((cat) => cat.id === portfolio.category)?.name || "Project"}
                    </p>
                  </div>
                </Link>
              )
            })
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
