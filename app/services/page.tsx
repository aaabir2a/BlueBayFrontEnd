import Link from 'next/link'

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
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link 
            href={`/services/${service.slug}`} 
            key={service.slug}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

