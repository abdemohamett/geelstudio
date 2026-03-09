"use client"

import React from 'react'

const CTA = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-light text-foreground leading-tight">
              Ready to grow your
              <br />
              <span className="text-primary">business online?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let&apos;s build a professional website that brings you more customers.
              <br />
              Delivered in just 5 days.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="max-w-lg mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <a 
                  href="https://wa.me/252619042197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-xl py-4 text-lg font-medium"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.708-.508-.173-.006-.371-.006-.57-.006-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <p className="text-sm text-muted-foreground">
                  Fast delivery • Affordable prices • Professional results
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">
              Or call us directly
            </p>
            <div className="flex justify-center">
              <a 
                href="tel:+252619042197"
                className="text-foreground hover:text-primary transition-colors duration-300 text-lg underline underline-offset-4 decoration-2 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +252 619 042 197
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
