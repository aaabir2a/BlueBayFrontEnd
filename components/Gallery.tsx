import { GalleryGrid } from "./GalleryGrid"
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

interface GalleryProps {
  images: ContentImage[]
}

export default function Gallery({ images }: GalleryProps) {
  const galleryImages = images.filter((img) => img.cms_menu.name === "Gallery" && img.head === "Office")

  return <GalleryGrid images={galleryImages} baseUrl={BASE_URL} />
}

