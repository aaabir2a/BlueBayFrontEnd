"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BASE_URL } from "@/lib/config"

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

function getImageName(imagePath: string): string {
  // Extract filename without extension
  const filename = imagePath.split('/').pop() || ''
  return filename.split('.')[0]
}

export default function ClientsDetails() {
  const [images, setImages] = useState<ContentImage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms_menu_content_image/api/v1/cms_menu_content_image/without_pagination/all/`)
        const data = await response.json()
        const brandImages = data.content_images.filter((img: ContentImage) => img.head === "Brand")
        setImages(brandImages)
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) {
    return (
      <div className="py-20 px-4 text-center">
        Loading clients...
      </div>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative aspect-[3/2] flex items-center justify-center">
                    <Image
                      src={`${BASE_URL}${image.image}`}
                      alt={getImageName(image.image)}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mt-4 text-sm font-medium text-gray-600">
                    {getImageName(image.image)}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

