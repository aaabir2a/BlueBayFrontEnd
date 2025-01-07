import Link from "next/link";
import {
  AppWindow,
  ArrowDownUp,
  BadgeEuro,
  Satellite,
  ServerCog,
  TabletSmartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";


  const services = [
    {
      icon: TabletSmartphone,
      slug: "Software Development", // Changed to match the name in the API
      href: "/services/Software-Development",
    },
    {
      icon: AppWindow,
      slug: "Web Application", // Changed to match the name in the API
      href: "/services/Web-Application",
    },
    {
      icon: ArrowDownUp,
      slug: "Domain & Hosting", // Changed to match the name in the API
      href: "/services/Domain-Hosting",
    },
    {
      icon: BadgeEuro,
      slug: "Digital Marketing", // Changed to match the name in the API
      href: "/services/Digital-Marketing",
    },
    {
      icon: ServerCog,
      slug: "Dedicated Server Hosting", // Changed to match the name in the API
      href: "/services/Dedicated-Server-Hosting",
    },
    {
      icon: Satellite,
      slug: "IT Training", // Changed to match the name in the API
      href: "/services/IT-Training",
    },
  ];
  

interface CmsMenu {
  name: string;
  value: string;
}

interface Post {
  cms_menu: CmsMenu;
  name: string;
  value: string;
}

async function getPost(): Promise<{ menu_items: Post[] }> {
  const res = await fetch(
    `https://api.bluebayit.com/cms_menu_content/api/v1/cms_menu_content/without_pagination/all/`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const post = await res.json();
  if (!post) notFound(); // If `notFound` is defined elsewhere

  return post;
}

export default async function ServiceSection() {
  const data = await getPost();

  const filteredImages = data.menu_items.filter(
    (menu: Post) => menu.cms_menu.name === "Services"
  );



  // Update services with data from filteredImages
  const updatedServices = services.map((service) => {
    const matchedMenu = filteredImages.find(
      (menu) => menu.name === service.slug
    );

    return matchedMenu
      ? {
          ...service,
          title: matchedMenu.name, // Use `service_name`
          description: matchedMenu.value, // Use `service_value`
        }
      : {
          ...service,
          title: "Default Title", // Fallback title if no match
          description: "Default Description", // Fallback description
        };
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updatedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#0066FF]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p
                  className="text-gray-600 mb-6"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-colors"
                >
                  <Link href={service.href}>Read More</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
