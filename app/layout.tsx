import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Better performance
  preload: true,
  fallback: ['system-ui', 'arial'],
})
import { SimpleNavbar } from '@/components/SimpleNavbar'
import { SimpleFooter } from '@/components/SimpleFooter'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'



export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata = {
  title: 'Kirk Henrich C. Gamo - Software Engineer',
  description: 'Portfolio website of Kirk Henrich C. Gamo, a passionate Software Engineer specializing in AI and web development.',
  keywords: 'Kirk Gamo, Software Engineer, AI Developer, Web Developer, Computer Science, Philippines, WVSU',
  authors: [{ name: 'Kirk Henrich C. Gamo' }],
  creator: 'Kirk Henrich C. Gamo',
  publisher: 'Kirk Henrich C. Gamo',
  robots: 'index, follow',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kirkgamo.dev',
    title: 'Kirk Henrich C. Gamo - Software Engineer',
    description: 'Portfolio website of Kirk Henrich C. Gamo, a passionate Software Engineer specializing in AI and web development.',
    siteName: 'Kirk Gamo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kirk Henrich C. Gamo - Software Engineer',
    description: 'Portfolio website of Kirk Henrich C. Gamo, a passionate Software Engineer specializing in AI and web development.',
    creator: '@KXAZTHRA1',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground transition-colors duration-300`}>
        <PerformanceMonitor />
        <SimpleNavbar />
        <main>{children}</main>
        <SimpleFooter />
      </body>
    </html>
  )
}
