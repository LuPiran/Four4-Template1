import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { ContactSection } from '../components/sections/ContactSection'
import { AboutStoreSection } from '../components/sections/AboutStoreSection'
import { PathologiesSection } from '../components/sections/PathologiesSection'
import { HeroCarousel } from '../components/sections/HeroCarousel'
import { ProductsSection } from '../components/sections/ProductsSection'
import { StatsSection } from '../components/sections/StatsSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { TrustBadges } from '../components/sections/TrustBadges'
import { ProductModalProvider } from '../context/ProductModalContext'
import { ProductModal } from '../components/products/ProductModal'
import { WhatsAppFloat } from '../components/common/WhatsAppFloat'

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustBadges />
      <AboutStoreSection />
      <PathologiesSection />
      <StatsSection />
      <TestimonialsSection />
      <ProductsSection />
      <ContactSection />
    </>
  )
}

export function HomeLayout() {
  return (
    <ProductModalProvider>
      <div className="min-h-screen overflow-x-clip bg-white font-sans text-brand-charcoal">
        <Navbar />
        <main>
          <HomePage />
        </main>
        <Footer />
        <ProductModal />
        <WhatsAppFloat />
      </div>
    </ProductModalProvider>
  )
}
