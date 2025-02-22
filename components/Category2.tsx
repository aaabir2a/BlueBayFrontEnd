"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BASE_URL } from "@/lib/config"
import projectsData from "../jsonData/projects.json"

interface Project {
  Sl: number
  "Company Name": string
  Service: string
  Category: string
  Description: string
  details: {
    client: string
    technology: string
    industry: string
    date: string
    website: string
  }
}

interface PortfolioImage {
  id: number
  cms_menu: {
    id: number
    name: string
    parent: null
  }
  head: string
  image: string
  imageName: string
}

const categories = [
  { id: "all", label: "ALL" },
  { id: "rams", label: "RAMS" },
  { id: "pos", label: "POS" },
  { id: "dms", label: "DMS" },
  { id: "otms", label: "OTMS" },
  { id: "hrms", label: "HRMS" },
  { id: "e-com", label: "E-COMMERCE" },
]

interface Category2Props {
  initialCategory?: string
  showCategoryButtons?: boolean
  portfolioImages: PortfolioImage[]
}

export default function Category2({
  initialCategory = "all",
  showCategoryButtons = true,
  portfolioImages,
}: Category2Props) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

  useEffect(() => {
    const filtered =
      activeCategory === "all"
        ? projectsData
        : projectsData.filter((project) => project.Category.toLowerCase() === activeCategory.toLowerCase())
    setFilteredProjects(filtered)
  }, [activeCategory])

  const getProjectImage = (projectName: string) => {
    const matchingImage = portfolioImages.find((img) => img.imageName.toLowerCase() === projectName.toLowerCase())
    return matchingImage ? `${BASE_URL}${matchingImage.image}` : "/placeholder.svg?height=400&width=600"
  }

  return (
    <div>
      {showCategoryButtons && (
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm py-4 shadow-sm">
          <div className="flex justify-center">
            <div className="inline-flex gap-2 p-1 bg-gray-100 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-6 py-2 rounded-lg text-sm font-medium transition-colors",
                    activeCategory === category.id ? "bg-[#00D749] text-white" : "hover:bg-gray-200",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const imageSrc = getProjectImage(project["Company Name"])

          return (
            <Link key={project.Sl} href={`/portfolio/${project.Sl}`} className="group block">
              <div className="relative aspect-[3/2] flex items-center justify-center rounded-lg">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={project["Company Name"]}
                  width={200}
                  height={200}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{project["Company Name"]}</h3>
                <p className="text-gray-500 uppercase text-sm">{project.Service}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

