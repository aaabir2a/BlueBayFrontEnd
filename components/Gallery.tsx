"use client"

import { useState, useEffect } from 'react'
import { GET_IMAGE_BY_without_pagination } from "@/lib/config"
import { GalleryGrid } from "./GalleryGrid"
import { Loader2, RefreshCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"

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

const TIMEOUT_DURATION = 10000 // 10 seconds
const MAX_RETRIES = 3
const RETRY_DELAY = 2000 // 2 seconds

export default function Gallery() {
  const [images, setImages] = useState<ContentImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchImagesWithTimeout = async () => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_DURATION)

    try {
      const response = await fetch(GET_IMAGE_BY_without_pagination, {
        signal: controller.signal,
        next: { revalidate: 60 }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const filteredImages = data.content_images.filter((img: ContentImage) => 
        img.cms_menu.name === "Gallery" && img.head === "Office"
      )
      setImages(filteredImages)
      setError(null)
      setRetryCount(0)
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out')
        }
        throw error
      }
    } finally {
      clearTimeout(timeoutId)
    }
  }

  const fetchWithRetry = async () => {
    setIsLoading(true)
    setError(null)

    try {
      await fetchImagesWithTimeout()
    } catch (error) {
      console.error("Failed to fetch gallery images:", error)
      
      if (retryCount < MAX_RETRIES) {
        setRetryCount(prev => prev + 1)
        setTimeout(() => {
          fetchWithRetry()
        }, RETRY_DELAY)
        setError(`Request failed. Retrying... (Attempt ${retryCount + 1}/${MAX_RETRIES})`)
      } else {
        setError("Failed to load gallery images after multiple attempts. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWithRetry()
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">
          {error ? error : "Loading gallery..."}
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <p className="text-red-500">{error}</p>
        <Button 
          onClick={() => {
            setRetryCount(0)
            fetchWithRetry()
          }}
          className="flex items-center space-x-2"
        >
          <RefreshCcw className="w-4 h-4" />
          <span>Try Again</span>
        </Button>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">No images found in the gallery.</p>
      </div>
    )
  }

  return <GalleryGrid images={images} />
}

