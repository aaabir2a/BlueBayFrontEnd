import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AddressSection from "@/components/AddressSection";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueBayIT - IT Solutions",
  description: "IT Solutions and Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
