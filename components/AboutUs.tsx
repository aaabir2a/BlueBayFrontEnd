import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, FileText, Eye } from 'lucide-react'

interface AboutCardProps {
  image: string
  title: string
  description: string
  icon: "mission" | "plan" | "vision"
}

const iconMap = {
  mission: MessageCircle,
  plan: FileText,
  vision: Eye,
}

function AboutCard({ image, title, description, icon }: AboutCardProps) {
  const Icon = iconMap[icon]
  
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="relative pt-12 pb-8 px-6 text-center">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="w-16 h-16 rounded-full bg-[#0091cb] flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

interface AboutUsProps {
  title?: string
  description?: string
  cards?: AboutCardProps[]
  backgroundImage?: string
}

export default function AboutUs({
  title = "ABOUT US",
  description = "Bluebay IT Limited, one of Bangladesh's largest recruiting & travel conglomerates, has been a pioneer in providing a global platform to the Bangladesh recruiting & Travel industry by enabling access to state of the art recruiting & travel automation technology.",
  backgroundImage = "/aboutus.svg?height=1200&width=1920",
  cards = [
    {
      image: "/mission.svg?height=300&width=400",
      title: "Our Mission",
      description: "We will grow and achieve market leadership by exceeding customers' expectations and will gain operational efficiencies in all our business activities.",
      icon: "mission"
    },
    {
      image: "/plan.svg?height=300&width=400",
      title: "Our Plan",
      description: "Our Plan today is made up of our vision and promise that all come together to support our purpose as a company, to work with our customers and partners.",
      icon: "plan"
    },
    {
      image: "/vision.svg?height=300&width=400",
      title: "Our Vision",
      description: "We want to be a market leader in all the business segments in which we operate and deliver exceptional satisfaction to our customers.",
      icon: "vision"
    }
  ]
}: AboutUsProps) {
  return (
    <section 
      className="relative py-20 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">                    
          <h2 className="text-3xl text-[#f26849] font-bold mb-6 relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0091cb]" />
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

