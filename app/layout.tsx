import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AddressSection from "@/components/AddressSection";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://blue-bay-front-end.vercel.app"),
  title: {
    default: "BlueBay IT Solutions",
    template: "%s | BlueBay IT Solutions",
  },
  description: "Leading IT solutions provider specializing in recruiting & travel automation technology",
  keywords: ["IT Solutions", "Software Development", "Web Applications", "Digital Marketing", "IT Training"],
  authors: [{ name: "BlueBay IT Limited" }],
  creator: "BlueBay IT Limited",
  publisher: "BlueBay IT Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blue-bay-front-end.vercel.app",
    siteName: "BlueBay IT Solutions",
    title: "BlueBay IT Solutions",
    description: "Leading IT solutions provider specializing in recruiting & travel automation technology",
    images: [
      {
        url: "https://blue-bay-front-end.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlueBay IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueBay IT Solutions",
    description: "Leading IT solutions provider specializing in recruiting & travel automation technology",
    images: ["https://blue-bay-front-end.vercel.app/og-image.png"],
    creator: "@bluebayit",
    site: "@bluebayit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden sm:block">
            <AddressSection />
          </div>
          <NavbarSection />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
