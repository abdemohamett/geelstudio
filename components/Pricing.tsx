"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
  
  const plans = [
    {
      title: 'Starter',
      price: '$120',
      description: 'Perfect for small businesses starting online.',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'WhatsApp contact button',
        'Contact form',
        'Basic SEO setup',
        'Delivery in 5–7 days'
      ]
    },
    {
      title: 'Business',
      price: '$180',
      description: 'Best for companies that want a more professional presence.',
      features: [
        'Up to 8 pages',
        'Modern UI design',
        'Mobile responsive',
        'WhatsApp & contact forms',
        'Google Maps integration',
        'Basic SEO',
        'Delivery in 7–10 days'
      ],
      popular: true
    },
    {
      title: 'E-Commerce',
      price: '$220',
      description: 'Start selling products online.',
      features: [
        'Product pages',
        'Shopping cart',
        'Checkout system',
        'Admin dashboard',
        'Mobile responsive',
        'Delivery in 10–14 days'
      ]
    },
    {
      title: 'Redesign',
      price: '$100',
      description: 'Upgrade your old website with a modern look.',
      features: [
        'Full redesign',
        'Mobile optimization',
        'Improved layout & UI'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Clean Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-foreground mb-6 tracking-tight">
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simple plans for businesses of all sizes.
          </p>
        </div>

        {/* Launch Offer */}
        <div className="mb-24">
          <div className="relative bg-card border border-border rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary/3 via-transparent to-transparent"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Launch Offer – Limited Time
              </div>
              <div className="text-5xl md:text-6xl font-light text-foreground mb-6">
                $99
                <span className="text-xl text-muted-foreground font-normal ml-3">Professional Website</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                First 5 clients only
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-base text-muted-foreground">
                <span>Modern design</span>
                <span>•</span>
                <span>Mobile friendly</span>
                <span>•</span>
                <span>Fast delivery</span>
                <span>•</span>
                <span>Free support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans - Larger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground text-sm px-6 py-2 rounded-full font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Card - Larger */}
              <div className={`relative bg-card border rounded-3xl p-6 lg:p-8 transition-all duration-700 ease-out ${
                hoveredPlan === index 
                  ? 'border-primary/30 shadow-2xl scale-[1.02]' 
                  : 'border-border hover:border-foreground/10'
              }`}>
                {/* Subtle Background Effect */}
                <div 
                  className={`absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent rounded-3xl opacity-0 transition-opacity duration-700 ${
                    hoveredPlan === index ? 'opacity-100' : ''
                  }`}
                />
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-light text-foreground">
                      {plan.title}
                    </h3>
                    <div className="text-4xl lg:text-5xl font-light text-foreground">
                      {plan.price}
                    </div>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          hoveredPlan === index ? 'bg-primary scale-125' : 'bg-muted-foreground'
                        }`}></div>
                        <span className="text-sm lg:text-base text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Bottom Line */}
                <div 
                  className={`absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-primary/50 via-primary to-primary/50 transition-all duration-700 rounded-full ${
                    hoveredPlan === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Quote */}
        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            Need something custom?
          </p>
          <Button 
            variant="outline"
            className="rounded-full px-8 py-3 text-base border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
