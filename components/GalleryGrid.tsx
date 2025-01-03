"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'
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
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageError = useCallback((imageId: number) => {
    setFailedImages(prev => new Set(prev).add(imageId))
  }, [])

  const handleImageLoad = useCallback((imageId: number) => {
    setLoadedImages(prev => new Set(prev).add(imageId))
  }, [])

  const ImageWithFallback = ({ image, index, ...props }: { 
    image: ContentImage, 
    index: number,
    className?: string,
    priority?: boolean,
    sizes?: string
  }) => {
    const isLoaded = loadedImages.has(image.id)
    const hasFailed = failedImages.has(image.id)

    if (hasFailed) {
      return (
        <div className="flex items-center justify-center bg-gray-100 w-full h-full rounded-lg">
          <ImageOff className="w-12 h-12 text-gray-400" />
        </div>
      )
    }

    return (
      <>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        )}
        <Image
          src={`${BASE_URL}${image.image}`}
          alt={`Office Gallery Image ${index + 1}`}
          fill
          onError={() => handleImageError(image.id)}
          onLoad={() => handleImageLoad(image.id)}
          className={`${props.className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          {...props}
        />
      </>
    )
  }

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
              onClick={() => !failedImages.has(image.id) && setSelectedImage(index)}
            >
              <ImageWithFallback
                image={image}
                index={index}
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {!failedImages.has(image.id) && loadedImages.has(image.id) && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                  >
                    <span className="text-white text-2xl">+</span>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && images[selectedImage] && !failedImages.has(images[selectedImage].id) && (
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                image={images[selectedImage]}
                index={selectedImage}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />

              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4">
                <button
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(prev => 
                      prev === 0 ? images.length - 1 : prev! - 1
                    )
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(prev => 
                      prev === images.length - 1 ? 0 : prev! + 1
                    )
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

