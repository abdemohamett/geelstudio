import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Web Development',
      description: 'Custom web development solutions that are fast, responsive, and optimized for user experience and search engines.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&crop=center',
      isComingSoon: false,
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      number: '02',
      title: 'Brand Identity',
      description: 'Complete brand identity design including logos, color schemes, and brand guidelines that make your business memorable.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&crop=center',
      isComingSoon: true,
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
    },
    {
      number: '03',
      title: 'Graphic Design',
      description: 'Stunning graphic design solutions for marketing materials, social media, and print that capture attention and drive engagement.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&crop=center',
      isComingSoon: true,
      features: ['Marketing Materials', 'Social Media', 'Print Design']
    },
    {
      number: '04',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media, and content marketing to grow your online presence.',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&h=500&fit=crop&crop=center',
      isComingSoon: true,
      features: ['SEO Strategy', 'Social Media', 'Content Marketing']
    }
  ]

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-muted/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            We Create
            <br />
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From branding to websites, we deliver high-impact design solutions that scale with your business—fast, flexible, and on demand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-20 group`}
            >
              {/* Service Number */}
              <div className="text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold text-foreground/3 shrink-0 w-24 sm:w-32 md:w-40 select-none group-hover:text-foreground/5 transition-colors duration-700 text-center md:text-left">
                {service.number}
              </div>

              {/* Service Image */}
              <div className="flex-1 relative w-full">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-xl md:shadow-2xl group-hover:shadow-primary/20 transition-all duration-700">
                  <div className="aspect-video relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
                
                {/* Floating features - Hidden on mobile */}
                <div className="hidden md:block absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  <div className="flex flex-col gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="flex-1 max-w-none md:max-w-lg space-y-4 md:space-y-6 shrink-0 text-center md:text-left">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      {service.title}
                    </h3>
                    {service.isComingSoon && (
                      <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary border-primary/20">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Mobile features display */}
                <div className="md:hidden flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Decorative line - Hidden on mobile */}
                <div className="hidden md:block w-20 h-1 bg-linear-to-r from-primary to-transparent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
