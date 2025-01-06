import { notFound } from 'next/navigation'
import Image from 'next/image'
import PageHeroSection from "@/components/PageHeroSection"
import { BASE_URL, GET_IMAGE_BY_without_pagination } from "@/lib/config"

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

interface PortfolioItem {
  id: string
  title: string
  category: string
  image: string
  description: string
  details: {
    client: string
    technology: string
    industry: string
    date: string
    website: string
  }
}


const portfolioItems = [
  {
    id: "poly-world-service",
    title: "Poly World Service",
    category: "rams",
    image: "/recruitment agency management system.svg?height=400&width=600",
    description: "Comprehensive recruitment agency management system",
    details: {
      client: "Poly World Service Ltd.",
      technology: "Next.js, Node.js, MongoDB",
      industry: "Recruitment",
      date: "2023",
      website: "https://example.com",
    }
  },
  {
    id: "hrdc",
    title: "H R D C",
    category: "rams",
    image: "/hrdc.svg?height=400&width=600",
    description: "Human resource development center management",
    details: {
      client: "HRDC International",
      technology: "React, Express, PostgreSQL",
      industry: "Human Resources",
      date: "2023",
      website: "https://example.com",
    }
  },
  {
    id: "airtrip-international",
    title: "Airtrip International",
    category: "rams",
    image: "/airtrip.svg?height=400&width=600",
    description: "International travel and recruitment platform",
    details: {
      client: "Airtrip International Ltd.",
      technology: "Next.js, Python, MySQL",
      industry: "Travel & Recruitment",
      date: "2023",
      website: "https://example.com",
    }
  },
  {
    id: "welcome-dmc",
    title: "Welcome D M C",
    category: "dms",
    image: "/welcome.svg?height=400&width=600",
    description: "Digital medical center management system",
    details: {
      client: "Welcome Medical Center",
      technology: "React, Django, PostgreSQL",
      industry: "Healthcare",
      date: "2023",
      website: "https://example.com",
    }
  },
  {
    id: "perfect-medicare",
    title: "Perfect Medicare Ltd",
    category: "dms",
    image: "/medicare.svg?height=400&width=600",
    description: "Healthcare facility management solution",
    details: {
      client: "Perfect Medicare Limited",
      technology: "Next.js, Express, MongoDB",
      industry: "Healthcare",
      date: "2023",
      website: "https://example.com",
    }
  },
  {
    id: "bashurhat-super-shop",
    title: "Bashurhat Super Shop",
    category: "pos",
    image: "/shop.svg?height=400&width=600",
    description: "Modern point of sale system for retail",
    details: {
      client: "Bashurhat Super Shop",
      technology: "React, Node.js, MySQL",
      industry: "Retail",
      date: "2023",
      website: "https://example.com",
    }
  },
  {
    id: 'Winner-Overseas-Limited',
    category: 'RAMS',
    title: 'Winner Overseas Limited',
    description: 'A leading overseas recruitment agency.',
    image: '/Winner.svg?height=400&width=600',
    details: {
        client: "Bashurhat Super Shop",
        technology: "React, Node.js, MySQL",
        industry: "Retail",
        date: "2023",
        website: "https://example.com",
      }
  },
  {
    id: 'Active-Manpower-Service',
    category: 'RAMS',
    title: 'Active Manpower Service',
    description: 'Providing skilled manpower services globally.',
    image: '/Manpower.svg?height=400&width=600',
    details: {
        client: "Bashurhat Super Shop",
        technology: "React, Node.js, MySQL",
        industry: "Retail",
        date: "2023",
        website: "https://example.com",
      }
  },
  {
    id: 'Al-Humayra-Health-Centre',
    category: 'DMS',
    title: 'Al-Humayra Health Centre Ltd',
    description: 'A comprehensive health care center.',
    image: '/Health.svg?height=400&width=600',
    details: {
        client: "Bashurhat Super Shop",
        technology: "React, Node.js, MySQL",
        industry: "Retail",
        date: "2023",
        website: "https://example.com",
      }
  },
]


// This function will merge API data with our static details
function createPortfolioItem(apiImage: ContentImage): PortfolioItem {
  return {
    id: apiImage.id.toString(),
    title: apiImage.head,
    category: apiImage.head.split(" ")[0].toLowerCase(),
    image: apiImage.image,
    description: `Comprehensive ${apiImage.head.toLowerCase()} solution`,
    details: {
      client: apiImage.head,
      technology: "Next.js, Node.js, MongoDB",
      industry: apiImage.head.split(" ")[0],
      date: "2024",
      website: "https://example.com",
    }
  }
}

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const response = await fetch(GET_IMAGE_BY_without_pagination, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio items')
    }

    const data = await response.json()
    const portfolioImages = data.content_images.filter(
      (img: ContentImage) => img.cms_menu.name === "Portfolio"
    )

    return portfolioImages.map(createPortfolioItem)
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    return []
  }
}

export async function generateStaticParams() {
  const items = await getPortfolioItems()
  return items.map((item) => ({
    id: item.id,
  }))
}

export default async function PortfolioItemPage({ 
  params 
}: { 
  params: { id: string }
}) {
  const portfolioItems = await getPortfolioItems()
  const portfolio = portfolioItems.find((item) => item.id === params.id)

  if (!portfolio) {
    notFound()
  }

  return (
    <>
      <PageHeroSection 
        title={portfolio.title}
        backgroundImage="/heroportfolio.svg?height=800&width=1600"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "PORTFOLIO", href: "/portfolio" },
          { label: portfolio.title.toUpperCase(), href: `/portfolio/${params.id}` }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src={`${BASE_URL}${portfolio.image}`}
                alt={portfolio.title}
                width={600}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-6">{portfolio.title}</h1>
              <p className="text-gray-600 mb-8">{portfolio.description}</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Client:</h3>
                    <p className="text-gray-600">{portfolio.details.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Industry:</h3>
                    <p className="text-gray-600">{portfolio.details.industry}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Technology:</h3>
                    <p className="text-gray-600">{portfolio.details.technology}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Date:</h3>
                    <p className="text-gray-600">{portfolio.details.date}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Website:</h3>
                  <a 
                    href={portfolio.details.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0066FF] hover:underline"
                  >
                    {portfolio.details.website}
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

