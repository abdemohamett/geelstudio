import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid background pattern */}
      
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-24">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* CTA Section */}
        <CTA />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default HomePage