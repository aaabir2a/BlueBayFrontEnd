import { notFound } from "next/navigation";

const services = [
  {
    title: "Software Development",
    slug: "Software-Development",
    description: " To develop a desired application.",
  },
  {
    title: "Web Application",
    slug: "Web-Application",
    description: "Custom Web App Development",
  },
  {
    title: "Domain & Hosting",
    slug: "Domain-Hosting",
    description: "Reliable Domain & Hosting Solutions",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic Online Marketing Solutions",
  },
  {
    title: "Dedicated Server Hosting",
    slug: "Dedicated-Server-Hosting",
    description: "Secure Dedicated Server Hosting",
  },
  {
    title: "IT Training",
    slug: "IT-Training",
    description: "Expert IT Skills Training",
  },
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((service) => service.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{service.title}</h1>
      <p className="text-xl">{service.description}</p>
      {/* Add more content specific to each service here */}
    </div>
  );
}
