import Gallery from "@/components/Gallery"
import PageHeroSection from "@/components/PageHeroSection"
import { GET_IMAGE_BY_without_pagination } from "@/lib/config"

export const metadata = {
  title: "Gallery - BlueBay IT",
  description: "View our gallery of projects and achievements",
}

async function getGalleryImages() {
  try {
    const response = await fetch(GET_IMAGE_BY_without_pagination, { next: { revalidate: 3600 } })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.content_images
  } catch (error) {
    console.error("Failed to fetch gallery images:", error)
    return []
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return (
    <>
      <PageHeroSection
        title="Our Gallery"
        backgroundImage="/services.jpg?height=800&width=1600"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "GALLERY", href: "/gallery" },
        ]}
      />
      <Gallery images={images} />
    </>
  )
}

