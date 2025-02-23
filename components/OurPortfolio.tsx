import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Category2 from "./Category2";
import { getCategoryData } from "./CategoryData";
import Link from "next/link";

export default async function OurPortfolio() {
  const portfolioImages = await getCategoryData();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#0066FF] text-xl font-semibold mb-4">
            OUR PORTFOLIO
          </h2>
          <h3 className="text-4xl font-bold text-[#f26849]">
            Latest & <span className="font-normal">Greatest Project</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0091cb]" />
          </h3>
        </div>

        <div className="overflow-hidden" style={{ maxHeight: "1000px" }}>
          <div className="overflow-y-auto pr-4" style={{ maxHeight: "600px" }}>
            <Category2 portfolioImages={portfolioImages} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/portfolio">
            <Button variant="outline" className="inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
