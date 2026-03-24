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
  title: 'Jennifer Hill - Senior Full Stack Developer',
  description: 'Portfolio website of Jennifer Hill, a passionate Senior Full Stack Developer specializing in AI and web development.',
  keywords: 'Jennifer, Senior Full Stack Developer, AI Developer, Web Developer, Computer Science, Philippines, WVSU',
  authors: [{ name: 'Jennifer Hill' }],
  creator: 'Jennifer Hill',
  publisher: 'Jennifer Hill',
  robots: 'index, follow',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kirkgamo.dev',
    title: 'Jennifer Hill - Senior Full Stack Developer',
    description: 'Portfolio website of Jennifer Hill, a passionate Senior Full Stack Developer specializing in AI and web development.',
    siteName: 'Jennifer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jennifer Hill - Senior Full Stack Developer',
    description: 'Portfolio website of Jennifer Hill, a passionate Senior Full Stack Developer specializing in AI and web development.',
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
