import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { HomeLayout } from './pages/HomePage'

function ProductRedirect() {
  const { productId } = useParams<{ productId: string }>()
  if (!productId) return <Navigate to="/" replace />
  return <Navigate to={`/?product=${productId}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/produtos/:productId" element={<ProductRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}
