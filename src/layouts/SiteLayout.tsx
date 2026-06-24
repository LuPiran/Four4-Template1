import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { AnimatedOutlet } from '../components/common/AnimatedOutlet'
import { ProductModalProvider } from '../context/ProductModalContext'
import { CartProvider } from '../context/CartContext'
import { ToastProvider } from '../context/ToastContext'
import { ProductModal } from '../components/products/ProductModal'
import { CartDrawer } from '../components/cart/CartDrawer'
import { WhatsAppFloat } from '../components/common/WhatsAppFloat'

export function SiteLayout() {
  return (
    <ProductModalProvider>
      <CartProvider>
        <ToastProvider>
          <div className="flex min-h-screen flex-col overflow-x-clip bg-white font-sans text-brand-charcoal">
            <Navbar />
            <main className="flex-1">
              <AnimatedOutlet />
            </main>
            <Footer />
            <ProductModal />
            <CartDrawer />
            <WhatsAppFloat />
          </div>
        </ToastProvider>
      </CartProvider>
    </ProductModalProvider>
  )
}
