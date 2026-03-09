import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import ImageCarousel from './ImageCarousel'

const Hero = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-20'>
        <div className='max-w-4xl mx-auto text-center flex flex-col items-center'>
          <Badge className='bg-background/80 backdrop-blur-md border border-white/10 text-white/90 px-4 py-2 text-sm font-medium tracking-wide shadow-xl'>
    Modern Websites for Growing Businesses
  </Badge>
          <div className='py-4 gap-4'>

          <span className="text-4xl md:text-5xl font-sans  bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent">Get a professional website <br /> that brings you more customers</span>
          

          <p className="text-md md:text-lg text-white/50 mb-8 max-w-2xl mx-auto pt-4">
          We design clean, high-performing websites so your business looks professional and wins more clients online. <br /> Delivered in 5 days.
          </p>
          </div>

          {/* CTA Button and Trust Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Button size="lg" className="rounded-sm px-8 py font-medium">
              Get Your Website Today
            </Button>
            
            {/* Trust indicator */}
            <div className="flex flex-col items-center">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-sm">Fast delivery • Affordable • Built for growth</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Carousel Section */}
      <ImageCarousel />
    </div>
  )
}

export default Hero