import React from 'react'
import Image from 'next/image'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className={className}
      priority={true} // Since it's above the fold
      quality={85} // Optimize quality vs file size
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
      style={{
        objectFit: 'cover'
      }}
    />
  )
}
