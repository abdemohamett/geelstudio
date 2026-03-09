"use client"

import React from 'react'
import Image from 'next/image'

const ImageCarousel = () => {
  const images = [
    '/heroimages/image.png',
    '/heroimages/image1.png', 
    '/heroimages/image2.png',
    '/heroimages/image3.png',
    '/heroimages/image4.png',
  ]

  return (
    <div className="relative w-full overflow-hidden py-16 mt-20">
      {/* Left shadow gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
      
      {/* Right shadow gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />
      
      {/* Moving carousel container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((src, index) => (
            <div
              key={`first-${index}`}
              className="shrink-0 mx-4 relative group"
            >
              <div className="relative overflow-hidden rounded shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={src}
                  alt={`Project showcase ${index + 1}`}
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {images.map((src, index) => (
            <div
              key={`second-${index}`}
              className="shrink-0 mx-4 relative group"
            >
              <div className="relative overflow-hidden rounded shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={src}
                  alt={`Project showcase ${index + 1}`}
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default ImageCarousel
