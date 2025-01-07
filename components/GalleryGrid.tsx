"use client"

import { useState} from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
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

interface GalleryGridProps {
  images: ContentImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={`${BASE_URL}${image.image}`}
                alt={`Office Gallery Image ${index + 1}`}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="/placeholder-image-url" // Add actual placeholder path here
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
            </motion.button>
            <Image
              src={`${BASE_URL}${images[selectedImage].image}`}
              alt={`Full View Image ${selectedImage + 1}`}
              width={1200} // Set explicit sizes for optimization
              height={900}
              className="object-contain"
              placeholder="blur"
              blurDataURL="/placeholder-image-url"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
