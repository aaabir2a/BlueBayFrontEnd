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

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(GET_IMAGE_BY_without_pagination)
        if (!response.ok) throw new Error('Failed to fetch images')
        
        const data = await response.json()
        const filteredImages = data.content_images.filter((img: ContentImage) => 
          img.cms_menu.name === "Gallery" && img.head === "Office"
        )
        setImages(filteredImages)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return <GalleryGrid images={images} />
}

