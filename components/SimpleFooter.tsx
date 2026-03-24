"use client"
import React from 'react'
import { Linkedin, Facebook, Instagram, Mail, MapPin, Phone, Code, Heart, ExternalLink, ArrowUp, Calendar, Globe } from 'lucide-react'

// Custom X (Twitter) Icon Component
const XIcon = ({ className = "" }) => (
  <svg 
    className={`w-5 h-5 ${className}`}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export const SimpleFooter = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-green-500/20 to-teal-500/20 dark:from-green-500/10 dark:to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Brand Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent mb-2">
                Kirk Henrich C. Gamo
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Software Engineer & AI Enthusiast</p>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Education', href: '#education' },
                { label: 'Experience', href: '#experience' },
                { label: 'Leadership', href: '#leadership' },
                { label: 'Skills', href: '#skills' },
                { label: 'Awards', href: '#awards' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-105 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Media & Contact */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/kirkgamo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 dark:bg-blue-600/20 hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/kirthenrich.gamo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 dark:bg-blue-700/20 hover:bg-blue-700 text-blue-600 dark:text-blue-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/korkkkk1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-pink-100 dark:bg-pink-600/20 hover:bg-pink-600 text-pink-600 dark:text-pink-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/KXAZTHRA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-slate-600/20 hover:bg-slate-900 text-gray-700 dark:text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon />
                </a>
              </div>
              
              <a
                href="mailto:gamo.kirkhenrich2005@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20 hover:from-blue-500 hover:to-purple-600 text-gray-700 dark:text-white/80 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-blue-300 dark:border-blue-500/30 hover:border-transparent"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">gamo.kirkhenrich2005@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700/50 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
              <span>&copy; {currentYear} Kirk Henrich C. Gamo</span>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>in the Philippines</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full border border-blue-300 dark:border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-300 group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
