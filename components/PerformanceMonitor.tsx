'use client'

import { useEffect } from 'react'

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Log Core Web Vitals to console in development
      if (process.env.NODE_ENV === 'development') {
        // Simple performance logging without web-vitals for now
        const logPerformanceMetric = (name: string, value: number) => {
          console.log(`📊 ${name}: ${Math.round(value)}ms`)
        }
        
        // Log basic timing metrics
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (perfData) {
            logPerformanceMetric('Page Load Time', perfData.loadEventEnd - perfData.fetchStart)
            logPerformanceMetric('DOM Content Loaded', perfData.domContentLoadedEventEnd - perfData.fetchStart)
          }
        }, 1000)
      }
      
      // Monitor loading performance
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (perfData && process.env.NODE_ENV === 'development') {
          console.log('🚀 Performance Metrics:', {
            'DNS Lookup': `${Math.round(perfData.domainLookupEnd - perfData.domainLookupStart)}ms`,
            'TCP Connection': `${Math.round(perfData.connectEnd - perfData.connectStart)}ms`,
            'First Byte': `${Math.round(perfData.responseStart - perfData.requestStart)}ms`,
            'Content Download': `${Math.round(perfData.responseEnd - perfData.responseStart)}ms`,
            'DOM Processing': `${Math.round(perfData.domComplete - perfData.domContentLoadedEventStart)}ms`,
            'Total Load Time': `${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`,
          })
        }
      })
    }
  }, [])

  return null // This component doesn't render anything
}