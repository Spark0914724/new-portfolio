'use client'

import React, { useState, useEffect } from 'react'

interface TypingCarouselProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export const TypingCarousel: React.FC<TypingCarouselProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Initialize the component
  useEffect(() => {
    if (!texts || texts.length === 0) return
    if (!isInitialized) {
      setIsInitialized(true)
      // Small delay to ensure smooth start
      setTimeout(() => {
        setCurrentText('')
        setCurrentTextIndex(0)
      }, 100)
    }
  }, [texts, isInitialized])

  useEffect(() => {
    // Safety check for texts array
    if (!texts || texts.length === 0 || !isInitialized) return

    const targetText = texts[currentTextIndex] || ''

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 200) // Small delay between deletion and next word
      return () => clearTimeout(transitionTimeout)
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(prev => prev.slice(0, -1))
        } else {
          // Finished deleting, prepare to move to next text
          setIsDeleting(false)
          setIsTransitioning(true)
          // Move to next text index after a small delay
          setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
          }, 100)
        }
      } else {
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        } else {
          setIsPaused(true)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration, isInitialized, isTransitioning])

  const displayText = () => {
    if (!isInitialized) {
      return texts && texts.length > 0 ? '' : 'Loading...'
    }
    
    // During transition, keep text empty
    if (isTransitioning) {
      return ''
    }
    
    return currentText
  }

  return (
    <span className={className}>
      {displayText()}
      <span className="animate-pulse text-blue-500">|</span>
    </span>
  )
}
