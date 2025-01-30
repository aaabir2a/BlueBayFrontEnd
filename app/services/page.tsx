import PageHeroSection from '@/components/PageHeroSection'
import ServiceSection from '@/components/ServiceSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive IT services tailored to your business needs",
  openGraph: {
    title: "BlueBay IT Solutions - Our Services",
    description: "Comprehensive IT services tailored to your business needs",
    images: [
      { url: "/api/og?title=Our Services&description=Comprehensive IT services tailored to your business needs" },
    ],
  },
  twitter: {
    title: "BlueBay IT Solutions - Our Services",
    description: "Comprehensive IT services tailored to your business needs",
    images: ["/api/og?title=Our Services&description=Comprehensive IT services tailored to your business needs"],
  },
}




export default function ServicesPage() {
  return (
    <>
    <PageHeroSection 
        title="Services Version One" 
        backgroundImage="/services.jpg?height=800&width=1600"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "SERVICES", href: "/services" }
        ]}
      />

      <ServiceSection/>


      <WhyChooseUs 
        title="WHY CHOOSE US services page"
        subtitle="We Provide Outsourced IT Services For your business"
        backgroundImage="/whychooseus.png?height=800&width=1600"
        supportCard={{
          title: "24/7 Customer support",
          description: "Our team comprises experienced developers proficient in modern technologies, frameworks, and tools. From front-end design with React and Next.js to backend development with Node.js, we deliver scalable and robust solutions.",
          phone: "+123 456 7890"
        }}
      />

    </>
  )
}

