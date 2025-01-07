import PageHeroSection from "@/components/PageHeroSection"
import Category2 from "@/components/Category2"

export default function PortfolioPage() {
  return (
    <>
      <PageHeroSection 
        title="Our Portfolio" 
        backgroundImage="/heroportfolio.svg?height=800&width=1600"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "PORTFOLIO", href: "/portfolio" }
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#0066FF] text-xl font-semibold mb-4">OUR PORTFOLIO</h2>
            <h3 className="text-4xl font-bold">
              Latest & <span className="font-normal">Greatest Projects</span>
            </h3>
          </div>
          
          <Category2 />
        </div>
      </section>
    </>
  )
}

