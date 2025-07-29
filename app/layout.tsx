import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
  description: 'Transform your marketing with AI-powered tools. Create, optimize, and scale your campaigns with intelligent automation and data-driven insights.',
  keywords: 'AI marketing, automation, campaign optimization, digital marketing, AI tools',
  authors: [{ name: 'ADmyBRAND Team' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered tools. Create, optimize, and scale your campaigns with intelligent automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        {children}
      </body>
    </html>
  )
} 