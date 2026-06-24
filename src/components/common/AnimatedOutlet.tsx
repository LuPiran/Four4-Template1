import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { getPageTransitionKey } from '../../utils/pageTransition'

export function AnimatedOutlet() {
  const location = useLocation()
  const transitionKey = getPageTransitionKey(location.pathname)
  const previousKey = useRef(transitionKey)

  useEffect(() => {
    if (previousKey.current !== transitionKey) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      previousKey.current = transitionKey
    }
  }, [transitionKey])

  return (
    <div key={transitionKey} className="page-transition-enter">
      <Outlet />
    </div>
  )
}
