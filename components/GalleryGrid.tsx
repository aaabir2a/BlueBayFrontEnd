"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

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

interface GalleryGridProps {
  images: ContentImage[]
  baseUrl: string
}

export function GalleryGrid({ images, baseUrl }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="aspect-[4/3] relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={`${baseUrl}${image.image}`}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 p-4 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-4xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`${baseUrl}${images[selectedImage].image}`}
              alt={`Gallery Image ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Simple Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev! - 1))
              }}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev! + 1))
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

