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
  portfolioImages: string
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
                  activeCategory === category.id ? "bg-[#00D749] text-white" : "hover:bg-gray-200",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const portfolioImage = portfolioImages[index % portfolioImages.length]

          return (
            <Link key={project.Sl} href={`/portfolio/${project.Sl}`} className="group block">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={portfolioImage ? `${BASE_URL}${portfolioImage.image}` : "/placeholder.svg?height=400&width=600"}
                  alt={project["Company Name"]}
                  width={600}
                  height={400}
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
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

