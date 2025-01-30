import PageHeroSection from "@/components/PageHeroSection";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const services = [
  {
    title: "Software Development",
    slug: "Software-Development",
    image: "/SoftwareDevelopment.svg?height=800&width=1600",
    description: " To develop a desired application.",
    whyChooseUs: {
      title: "WHY CHOOSE OUR CONSULTING",
      subtitle: "To develop a desired application",
      backgroundImage: "/SoftwareDevelopment.svg?height=800&width=1600",
      supportCard: {
        title: "Software Development",
        description:
          "Our team of expert consultants is available around the clock to provide strategic guidance and support for your business technology needs.",
        phone: "+123 456 7890",
      },
    },
  },
  {
    title: "Web Application",
    slug: "Web-Application",
    image: "/WebApplication.svg?height=800&width=1600",
    description: "Custom Web App Development",
    whyChooseUs: {
      title: "WHY CHOOSE OUR CONSULTING Web Application",
      subtitle: "To develop a desired application",
      backgroundImage: "/WebApplication.svg?height=800&width=1600",
      supportCard: {
        title: "Custom Web App Development",
        description:
          "Our team of expert consultants is available around the clock to provide strategic guidance and support for your business technology needs.",
        phone: "+123 456 7890",
      },
    },
  },
  {
    title: "Domain & Hosting",
    slug: "Domain-Hosting",
    image: "/DomainHosting.svg?height=800&width=1600",
    description: "Reliable Domain & Hosting Solutions",
    whyChooseUs: {
      title: "WHY CHOOSE OUR CONSULTING Domain & Hosting",
      subtitle: "To develop a desired application",
      backgroundImage: "/DomainHosting.svg?height=800&width=1600",
      supportCard: {
        title: "Reliable Domain & Hosting Solutions",
        description:
          "Our team of expert consultants is available around the clock to provide strategic guidance and support for your business technology needs.",
        phone: "+123 456 7890",
      },
    },
  },
  {
    title: "Digital Marketing",
    slug: "Digital-Marketing",
    image: "/DigitalMarketing.svg?height=800&width=1600",
    description: "Strategic Online Marketing Solutions Digital Marketing",
    whyChooseUs: {
      title: "WHY CHOOSE OUR CONSULTING",
      subtitle: "To develop a desired application",
      backgroundImage: "/DigitalMarketing.svg?height=800&width=1600",
      supportCard: {
        title: "Strategic Online Marketing Solutions",
        description:
          "Our team of expert consultants is available around the clock to provide strategic guidance and support for your business technology needs.",
        phone: "+123 456 7890",
      },
    },
  },
  {
    title: "Dedicated Server Hosting",
    slug: "Dedicated-Server-Hosting",
    image: "/DedicatedServerHosting.svg?height=800&width=1600",
    description: "Secure Dedicated Server Hosting",
    whyChooseUs: {
      title: "WHY CHOOSE OUR CONSULTING Dedicated Server Hosting",
      subtitle: "To develop a desired application",
      backgroundImage: "/DedicatedServerHosting.svg?height=800&width=1600",
      supportCard: {
        title: "Secure Dedicated Server Hosting",
        description:
          "Our team of expert consultants is available around the clock to provide strategic guidance and support for your business technology needs.",
        phone: "+123 456 7890",
      },
    },
  },
  {
    title: "IT Training",
    slug: "IT-Training",
    image: "/ITTraining.svg?height=800&width=1600",
    description: "Expert IT Skills Training ",
    whyChooseUs: {
      title: "WHY CHOOSE OUR CONSULTING IT Training",
      subtitle: "To develop a desired application",
      backgroundImage: "/ITTraining.svg?height=800&width=1600",
      supportCard: {
        title: "Expert IT Skills Training",
        description:
          "Our team of expert consultants is available around the clock to provide strategic guidance and support for your business technology needs.",
        phone: "+123 456 7890",
      },
    },
  },
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((service) => service.slug === slug)

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  const title = `${service.title} - Our Services`
  const description = service.description.slice(0, 160) + "..."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}` }],
    },
    twitter: {
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`],
    },
  }
}


export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeroSection
        title={service.title}
        backgroundImage="/webapp.jpg?height=1000&width=1600"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "SERVICES", href: "/services" },
          { label: service.title.toUpperCase(), href: `/services/${slug}` },
        ]}
      />

      <ServiceDetails
        image={service.image}
        title={service.title}
        description={service.description}
        currentService={service.title}
      />

      <WhyChooseUs
        title={service.whyChooseUs.title}
        subtitle={service.whyChooseUs.subtitle}
        backgroundImage={service.whyChooseUs.backgroundImage}
        supportCard={service.whyChooseUs.supportCard}
      />
    </>
  );
}
