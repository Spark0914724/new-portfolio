'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Home, User, GraduationCap, Briefcase, Users, Code, Trophy, ChevronDown, Sparkles } from 'lucide-react'

export const SimpleNavbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'leadership', label: 'Leadership', icon: <Users className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'awards', label: 'Awards', icon: <Trophy className="w-4 h-4" /> }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scroll state for background blur effect
      setIsScrolled(currentScrollY > 50)
      
      // Keep navbar always visible
      setIsVisible(true)
    }

    // Set up Intersection Observer for better section detection
    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navItems.forEach(item => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-500/10 dark:shadow-black/20' 
          : 'bg-white/80 dark:bg-transparent backdrop-blur-sm'
      }`}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-amber-500/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                {activeSection !== 'home' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  Jennifer Hill
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Senior Full Stack Developer
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <span className={`transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110 text-white' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="hidden xl:block">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-xl animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-300/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                aria-label="Toggle mobile menu"
              >
                <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </div>
                {!isMobileMenuOpen && activeSection !== 'home' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile Menu Content */}
        <div className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-gray-300 dark:border-gray-700/50 transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex-shrink-0 p-4 border-b border-gray-300 dark:border-gray-700/50 bg-white dark:bg-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Navigation</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Quick access</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-4 h-4 text-gray-700 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[0.98] text-left ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 bg-white/80 dark:bg-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                    activeSection === item.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{item.label}</div>
                    <div className={`text-xs truncate ${
                      activeSection === item.id
                        ? 'text-white/70'
                        : 'text-gray-700 dark:text-gray-500'
                    }`}>
                      {item.id === 'home' && 'Welcome section'}
                      {item.id === 'about' && 'Personal introduction'}
                      {item.id === 'education' && 'Academic background'}
                      {item.id === 'experience' && 'Work history'}
                      {item.id === 'leadership' && 'Leadership roles'}
                      {item.id === 'skills' && 'Technical abilities'}
                      {item.id === 'awards' && 'Achievements'}
                    </div>
                  </div>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 p-4 border-t border-gray-300 dark:border-gray-700/50 bg-white dark:bg-transparent">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700/50">
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-1 truncate">
                  Currently viewing: {navItems.find(item => item.id === activeSection)?.label}
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-400">
                  Scroll or tap to navigate between sections
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
