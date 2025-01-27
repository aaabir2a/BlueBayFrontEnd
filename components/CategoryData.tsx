import {GET_IMAGE_BY_without_pagination } from "@/lib/config"

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

export async function getCategoryData() {
  try {
    const response = await fetch(GET_IMAGE_BY_without_pagination, { next: { revalidate: 3600 } })
    if (!response.ok) {
      throw new Error("Failed to fetch portfolio images")
    }
    const data = await response.json()
    const filteredImages = data.content_images.filter((img: ContentImage) => img.cms_menu.name === "Portfolio")
    return filteredImages
  } catch (error) {
    console.error("Error fetching portfolio images:", error)
    return []
  }
}

