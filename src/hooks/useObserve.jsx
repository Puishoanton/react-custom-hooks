import { useEffect, useRef } from 'react'

export const useObserve = (children, callback) => {
  const observer = useRef()

  useEffect(() => {
    let cb = function (entries, observer) {
      if (entries[0].isIntersecting) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb)
    observer.current.observe(children.current)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.current.unobserve(children.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback])
}
