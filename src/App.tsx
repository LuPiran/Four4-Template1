import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { BlogPage } from './pages/BlogPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { FaqPage } from './pages/FaqPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PolicyPage } from './pages/PolicyPage'

function LegacyProductRedirect() {
  const { productId } = useParams<{ productId: string }>()
  return <Navigate to={productId ? `/shop/${productId}` : '/shop'} replace />
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policies/:slug" element={<PolicyPage />} />
        <Route path="/wellness" element={<Navigate to="/shop" replace />} />
      </Route>
      <Route path="/produtos/:productId" element={<LegacyProductRedirect />} />
    </Routes>
  )
}
