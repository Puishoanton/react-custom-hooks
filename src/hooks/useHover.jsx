

import { useState, useEffect } from 'react'

export const useHovering = ref => {
  const [isHovering, setIsHovering] = useState(false)

  const on = () => setIsHovering(true)
  const off = () => setIsHovering(false)

  useEffect(() => {
    if (!ref) return

    const node = ref.current

    node.addEventListener('mousemove', on)
    node.addEventListener('mouseleave', off)
    node.addEventListener('mouseenter', on)

    return () => {
      node.removeEventListener('mouseenter', on)
      node.removeEventListener('mousemove', on)
      node.removeEventListener('mouseleave', off)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return isHovering
}
