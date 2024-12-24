import PageHeroSection from '@/components/PageHeroSection'
import ServiceSection from '@/components/ServiceSection'




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

    </>
  )
}

