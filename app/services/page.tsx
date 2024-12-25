import PageHeroSection from '@/components/PageHeroSection'
import ServiceSection from '@/components/ServiceSection'
import WhyChooseUs from '@/components/WhyChooseUs'




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
          description: "Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no.",
          phone: "+123 456 7890"
        }}
      />

    </>
  )
}

