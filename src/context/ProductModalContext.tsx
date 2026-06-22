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
import { useSearchParams } from 'react-router-dom'
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
  const [searchParams, setSearchParams] = useSearchParams()
  const productId = searchParams.get('product')
  const [isClosing, setIsClosing] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isValidProduct = productId ? Boolean(getProductById(productId)) : false
  const isOpen = isValidProduct && !isClosing

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
      setSearchParams({ product: id }, { replace: false })
    },
    [clearCloseTimer, setSearchParams],
  )

  const closeProduct = useCallback(() => {
    if (!productId || isClosing) return
    setIsClosing(true)
    closeTimerRef.current = setTimeout(() => {
      setSearchParams({}, { replace: true })
      setIsClosing(false)
      closeTimerRef.current = null
    }, CLOSE_DURATION_MS)
  }, [isClosing, productId, setSearchParams])

  useEffect(() => {
    if (productId && !getProductById(productId)) {
      setSearchParams({}, { replace: true })
    }
  }, [productId, setSearchParams])

  useEffect(() => {
    return () => clearCloseTimer()
  }, [clearCloseTimer])

  const value = useMemo(
    () => ({
      productId: isValidProduct ? productId : null,
      isOpen,
      isClosing,
      openProduct,
      closeProduct,
    }),
    [closeProduct, isClosing, isOpen, isValidProduct, openProduct, productId],
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
