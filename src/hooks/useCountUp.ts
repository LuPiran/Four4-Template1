import { useEffect, useState } from 'react'

export function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    let frame = 0
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}
