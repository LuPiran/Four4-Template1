import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'

type ProductModalContextValue = {
  productId: string | null
  isOpen: boolean
  isClosing: boolean
  openProduct: (id: string) => void
  closeProduct: () => void
}

const ProductModalContext = createContext<ProductModalContextValue | null>(null)

const CLOSE_DURATION_MS = 340

export function ProductModalProvider({ children }: { children: ReactNode }) {
  const { productId: routeProductId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [isClosing, setIsClosing] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const productId =
    routeProductId && getProductById(routeProductId) ? routeProductId : null

  const isOpen = Boolean(productId) && !isClosing

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openProduct = useCallback(
    (id: string) => {
      if (!getProductById(id)) return
      clearCloseTimer()
      setIsClosing(false)
      navigate(`/shop/${id}`)
    },
    [clearCloseTimer, navigate],
  )

  const closeProduct = useCallback(() => {
    if (!productId || isClosing) return
    setIsClosing(true)
    closeTimerRef.current = setTimeout(() => {
      if (location.pathname.startsWith('/shop/')) {
        navigate('/shop', { replace: true })
      }
      setIsClosing(false)
      closeTimerRef.current = null
    }, CLOSE_DURATION_MS)
  }, [isClosing, location.pathname, navigate, productId])

  useEffect(() => {
    if (routeProductId && !getProductById(routeProductId)) {
      navigate('/shop', { replace: true })
    }
  }, [navigate, routeProductId])

  useEffect(() => {
    return () => clearCloseTimer()
  }, [clearCloseTimer])

  const value = useMemo(
    () => ({
      productId,
      isOpen,
      isClosing,
      openProduct,
      closeProduct,
    }),
    [closeProduct, isClosing, isOpen, openProduct, productId],
  )

  return <ProductModalContext.Provider value={value}>{children}</ProductModalContext.Provider>
}

export function useProductModal() {
  const context = useContext(ProductModalContext)
  if (!context) {
    throw new Error('useProductModal must be used within ProductModalProvider')
  }
  return context
}

export const productModalCloseDuration = CLOSE_DURATION_MS
