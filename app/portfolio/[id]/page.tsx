import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import {
  BASE_URL,
  GET_ALL_PORTFOLIOS,
  GET_PORTFOLIO_CATEGORIES,
} from "@/lib/config";

interface Portfolio {
  id: number;
  title: string;
  slug: string | null;
  description: string;
  image: string;
  category: number;
}

interface PortfolioCategory {
  id: number;
  name: string;
}

// Fetch all portfolios
async function getAllPortfolios(): Promise<Portfolio[]> {
  try {
    const response = await fetch(GET_ALL_PORTFOLIOS, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch portfolios");
    }
    const data = await response.json();
    return data.portfolios || [];
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return [];
  }
}

// Fetch all categories
async function getAllCategories(): Promise<PortfolioCategory[]> {
  try {
    const response = await fetch(GET_PORTFOLIO_CATEGORIES, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data.portfolio_categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function generateStaticParams() {
  const portfolios = await getAllPortfolios();

  return portfolios.map((portfolio) => ({
    id: portfolio.slug || portfolio.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const portfolios = await getAllPortfolios();
  const { id } = await params

  // Find portfolio by slug or id
  const portfolio = portfolios.find(
    (item) => item.slug === id || item.id.toString() === id
  );

  if (!portfolio) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = `${portfolio.title} - Portfolio`;
  const description = portfolio.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(
            title
          )}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        `/api/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      ],
    },
  };
}

export default async function PortfolioItemPage({ params }: PageProps) {
  const portfolios = await getAllPortfolios();
  const categories = await getAllCategories();
  const { id } = await params

  // Find portfolio by slug or id
  const portfolio = portfolios.find(
    (item) => item.slug === id || item.id.toString() === id
  );

  if (!portfolio) {
    notFound();
  }

  // Find category name
  const category = categories.find((cat) => cat.id === portfolio.category);
  const categoryName = category?.name || "Project";

  return (
    <>
      <PageHeroSection
        title={portfolio.title}
        backgroundImage="/placeholder.svg?height=800&width=1600"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "PORTFOLIO", href: "/portfolio" },
          { label: portfolio.title.toUpperCase(), href: `/portfolio/${id}` },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* Reduced image size with max-height and container */}
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={
                      portfolio?.image && portfolio.image.startsWith("/media")
                        ? `${BASE_URL}${portfolio.image}`
                        : "/placeholder.svg?height=600&width=600"
                    }
                    alt={portfolio.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-6">{portfolio.title}</h1>
              <p className="text-gray-600 mb-8">{portfolio.description}</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Project:</h3>
                    <p className="text-gray-600">{portfolio.title}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Category:</h3>
                    <p className="text-gray-600">{categoryName}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ID:</h3>
                    <p className="text-gray-600">{portfolio.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
