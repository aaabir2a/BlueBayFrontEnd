import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AddressSection from '@/components/AddressSection'
import NavbarSection from '@/components/NavbarSection'
import FooterSection from '@/components/FooterSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlueBayIT - IT Solutions',
  description: 'IT Solutions and Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AddressSection/>
        <NavbarSection/>
        {children}
        <FooterSection/>
      </body>
    </html>
  )
}

