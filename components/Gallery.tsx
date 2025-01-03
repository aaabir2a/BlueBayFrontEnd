"use client"

import { useState, useEffect } from 'react'
import { GET_IMAGE_BY_without_pagination } from "@/lib/config"
import { GalleryGrid } from "./GalleryGrid"
import { Loader2 } from 'lucide-react'

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

export default function Gallery() {
  const [images, setImages] = useState<ContentImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(GET_IMAGE_BY_without_pagination, {
          next: { revalidate: 60 } // Revalidate every minute
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        const filteredImages = data.content_images.filter((img: ContentImage) => 
          img.cms_menu.name === "Gallery" && img.head === "Office"
        )
        setImages(filteredImages)
      } catch (error) {
        console.error("Failed to fetch gallery images:", error)
        setError("Failed to load gallery images. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    )
  }

  return <GalleryGrid images={images} />
}

