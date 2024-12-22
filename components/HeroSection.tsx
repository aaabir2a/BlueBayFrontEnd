import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-xl text-gray-600">Optimize IT Systems</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Creating a better{" "}
              <span className="text-[#0066FF] block">IT solutions</span>
            </h1>
            <p className="text-gray-600 max-w-lg">
            Bluebay IT Limited, one of Bangladeshs largest recruiting & travel conglomerates, has been a pioneer in providing a global platform to the Bangladesh recruiting & Travel industry by enabling access to state of the art recruiting & travel automation technology.
            </p>
            <Button
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 rounded-full text-lg"
            >
              Start Now
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#0066FF] rounded-full opacity-10 blur-3xl transform scale-150" />
            <Image
              src="/Herosection.svg"
              alt="IT Professional"
              width={600}
              height={600}
              className="relative"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

