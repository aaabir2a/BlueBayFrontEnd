import Gallery from '@/components/Gallery'
import PageHeroSection from '@/components/PageHeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
          <PageHeroSection 
              title="GALLERY" 
              backgroundImage="/services.jpg?height=800&width=1600"
              breadcrumbs={[
                { label: "HOME", href: "/" },
                { label: "GALLERY", href: "/gallery" }
              ]}
            />
        <Gallery/>
    </div>
  )
}

export default page