"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from 'lucide-react'

const images = [
  {
    src: "/6.jpg?height=600&width=800",
    alt: "Team photo 1",
    width: 800,
    height: 600
  },
  {
    src: "/5.jpg?height=600&width=800",
    alt: "Team photo 2",
    width: 800,
    height: 600
  },
  {
    src: "/4.jpg?height=600&width=800",
    alt: "Team photo 3",
    width: 800,
    height: 600
  },
  {
    src: "/3.jpg?height=600&width=800",
    alt: "Team photo 4",
    width: 800,
    height: 600
  },
  {
    src: "/2.jpg?height=600&width=800",
    alt: "Team photo 5",
    width: 800,
    height: 600
  },
  {
    src: "/1.jpg?height=600&width=800",
    alt: "Team photo 6",
    width: 800,
    height: 600
  },
  {
    src: "/6.jpg?height=600&width=800",
    alt: "Team photo 7",
    width: 800,
    height: 600
  },
  {
    src: "/5.jpg?height=600&width=800",
    alt: "Team photo 8",
    width: 800,
    height: 600
  },
  {
    src: "/4.jpg?height=600&width=800",
    alt: "Team photo 9",
    width: 800,
    height: 600
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileHover={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <span className="text-white text-2xl">+</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
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
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(prev => 
                    prev === 0 ? images.length - 1 : prev! - 1
                  )
                }}
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(prev => 
                    prev === images.length - 1 ? 0 : prev! + 1
                  )
                }}
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

