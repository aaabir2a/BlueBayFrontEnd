"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Category2 from "@/components/Category2"
import { GET_PORTFOLIO_CATEGORIES } from "@/lib/config"

interface PortfolioCategory {
  id: number
  name: string
}

interface OurPortfolioProps {
  portfolioImages?: any[] // Kept for backward compatibility
}

export default function OurPortfolio({ portfolioImages = [] }: OurPortfolioProps) {
  const [categories, setCategories] = useState<PortfolioCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#0066FF] text-xl font-semibold mb-4">OUR PORTFOLIO</h2>
          <h3 className="text-4xl font-bold">
            Latest & <span className="font-normal">Greatest Project</span>
          </h3>
        </div>

        <div className="overflow-hidden" style={{ maxHeight: "1200px" }}>
          <div className="overflow-y-auto pr-4" style={{ maxHeight: "1200px" }}>
            <Category2 portfolioImages={portfolioImages} initialCategory="all" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/portfolio">
            <Button variant="outline" className="inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
