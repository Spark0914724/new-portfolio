import React from 'react'
import { Download, Facebook, Instagram, Linkedin } from 'lucide-react'
import { TypingCarousel } from '../components/TypingCarousel'
import { ProfileImage } from '../components/ProfileImage'

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
import dynamic from 'next/dynamic'

// Lazy load sections for better performance
const SimpleAboutEnhanced = dynamic(() => import('../components/sections/SimpleAboutEnhanced').then(mod => ({ default: mod.SimpleAboutEnhanced })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>
})

const SimpleEducation = dynamic(() => import('../components/sections/SimpleEducation').then(mod => ({ default: mod.SimpleEducation })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div></div>
})

const SimpleExperience = dynamic(() => import('../components/sections/SimpleExperience').then(mod => ({ default: mod.SimpleExperience })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div></div>
})

const SimpleLeadership = dynamic(() => import('../components/sections/SimpleLeadership').then(mod => ({ default: mod.SimpleLeadership })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div></div>
})

const SimpleSkills = dynamic(() => import('../components/sections/SimpleSkills').then(mod => ({ default: mod.SimpleSkills })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div></div>
})

const SimpleAwards = dynamic(() => import('../components/sections/SimpleAwards').then(mod => ({ default: mod.SimpleAwards })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div></div>
})

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-emerald-950/20 pt-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/20 to-teal-500/20 dark:from-green-500/10 dark:to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center min-h-[75vh]">
            {/* Left Side - Profile Picture */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1 mt-8">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-200/50 dark:border-white/20 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-sm">
                  <ProfileImage
                    src="/profile-picture.png"
                    alt="Kirk Henrich C. Gamo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Enhanced decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse shadow-xl shadow-blue-500/50 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse shadow-xl shadow-emerald-500/50 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute top-8 -left-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce shadow-xl shadow-purple-500/50"></div>
                <div className="absolute -bottom-12 right-12 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse shadow-xl shadow-orange-500/50"></div>
                
                {/* Floating ring elements */}
                <div className="absolute -top-8 left-8 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
                <div className="absolute -right-8 bottom-8 w-20 h-20 border-2 border-purple-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left space-y-8 order-2 lg:order-2 px-4 lg:px-0">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-xl text-gray-600 dark:text-white/60 font-light">Hello, I'm</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Jennifer Hill
                    </span>
                  </h1>
                </div>
                
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light min-h-[3rem] text-gray-700 dark:text-white/80">
                  I'm a{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent font-semibold">
                    <TypingCarousel
                      texts={[
                        "Full-Stack Developer",
                        "Cloud & DevOps Developer",
                        "AI & Data-Driven Developer",
                        "Problem Solver"
                      ]}
                      className="text-primary font-semibold"
                      typingSpeed={100}
                      deletingSpeed={50}
                      pauseDuration={2000}
                    />
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl leading-relaxed">
                Passionate Full Stack Developer with extensive experience designing, building, and deploying high-performance web applications. 
                Skilled in creating scalable and maintainable systems, implementing robust backend services, and delivering intuitive, user-centric frontend experiences. 
                Adept at working in remote teams, managing cloud infrastructure, and leading projects that drive innovation and measurable impact. Committed to continuous learning and applying cutting-edge technologies to solve real-world problems.
              </p>
              
              {/* Buttons and Social Media */}
              <div className="space-y-6 pt-2">
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                <a
                  href="/Jennifer_Hill_Full_Stack_Developer.pdf"
                  download="Jennifer_Hill_Full_Stack_Developer.pdf"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-xl shadow-blue-500/25"
                >
                  <Download size={18} />
                  Download CV
                </a>
                </div>
                
                {/* Social Media Links */}
                {/* <div className="flex justify-center lg:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/in/kirkgamo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-600 dark:text-white rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-300/50 dark:border-white/20 hover:border-blue-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  
                  <a
                    href="https://www.facebook.com/kirthenrich.gamo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-600 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-300/50 dark:border-white/20 hover:border-blue-400"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  
                  <a
                    href="https://www.instagram.com/korkkkk1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-600 dark:text-white rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-300/50 dark:border-white/20 hover:border-pink-400"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  
                  <a
                    href="https://x.com/KXAZTHRA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-600 dark:text-white rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-300/50 dark:border-white/20 hover:border-slate-700"
                    aria-label="X (formerly Twitter)"
                  >
                    <XIcon size={20} />
                  </a>
                </div> */}
              </div>
              
              {/* Additional spacing for better design balance */}
              <div className="mt-12 lg:mt-16"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <SimpleAboutEnhanced />

      {/* Education Section */}
      <SimpleEducation />

      {/* Experience Section */}
      <SimpleExperience />

      {/* Leadership Section */}
      <SimpleLeadership />

      {/* Skills Section */}
      <SimpleSkills />

      {/* Awards Section */}
      <SimpleAwards />
    </div>
  )
}
