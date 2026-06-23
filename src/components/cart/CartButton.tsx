import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { useCart } from '../../context/CartContext'

type CartButtonProps = {
  className?: string
}

export function CartButton({ className = '' }: CartButtonProps) {
  const { itemCount, openCart } = useCart()

  return (
    <button
      type="button"
      onClick={openCart}
      className={`cart-trigger relative flex size-10 items-center justify-center rounded-full border border-brand-teal/20 bg-white text-brand-teal transition-all hover:border-brand-sea hover:bg-brand-cream hover:shadow-md ${className}`}
      aria-label={`Open cart${itemCount > 0 ? `, ${itemCount} items` : ''}`}
    >
      <HiOutlineShoppingBag className="size-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex min-w-5 items-center justify-center rounded-full bg-brand-gold px-1.5 py-0.5 text-[10px] font-bold text-brand-charcoal">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  )
}
