import { notFound } from "next/navigation"
import Image from "next/image"
import PageHeroSection from "@/components/PageHeroSection"
import { BASE_URL, GET_IMAGE_BY_without_pagination } from "@/lib/config"
import projectsData from "@/jsonData/projects.json"

// interface Project {
//   Sl: number
//   "Company Name": string
//   Service: string
//   Category: string
//   Description: string
//   details: {
//     client: string
//     technology: string
//     industry: string
//     date: string
//     website: string
//   }
// }

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

async function getPortfolioImages(): Promise<ContentImage[]> {
  try {
    const response = await fetch(GET_IMAGE_BY_without_pagination, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch portfolio images")
    }

    const data = await response.json()
    return data.content_images.filter((img: ContentImage) => img.cms_menu.name === "Portfolio")
  } catch (error) {
    console.error("Error fetching portfolio images:", error)
    return []
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.Sl.toString(),
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PortfolioItemPage({ params }: PageProps) {
  // Await the params
  const { id } = await params
  const project = projectsData.find((item) => item.Sl.toString() === id)

  if (!project) {
    notFound()
  }

  const portfolioImages = await getPortfolioImages()
  const projectImage = portfolioImages[Number.parseInt(id) % portfolioImages.length]

  return (
    <>
      <PageHeroSection
        title={project["Company Name"]}
        backgroundImage="/placeholder.svg?height=800&width=1600"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "PORTFOLIO", href: "/portfolio" },
          { label: project["Company Name"].toUpperCase(), href: `/portfolio/${id}` },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src={projectImage ? `${BASE_URL}${projectImage.image}` : "/placeholder.svg?height=600&width=800"}
                alt={project["Company Name"]}
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-6">{project["Company Name"]}</h1>
              <p className="text-gray-600 mb-8">{project.Description}</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Client:</h3>
                    <p className="text-gray-600">{project.details.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Industry:</h3>
                    <p className="text-gray-600">{project.details.industry}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Technology:</h3>
                    <p className="text-gray-600">{project.details.technology}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Date:</h3>
                    <p className="text-gray-600">{project.details.date}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Website:</h3>
                  <a
                    href={project.details.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0066FF] hover:underline"
                  >
                    {project.details.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

