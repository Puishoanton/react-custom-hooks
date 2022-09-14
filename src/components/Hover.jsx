import React, { useRef } from 'react'
import { useHovering } from './../hooks/useHover'

const Hover = () => {
  const box = useRef()
  const isHovering = useHovering(box)
  //;
  return (
    <div
      ref={box}
      style={{
        margin: '0 auto',
        width: 100,
        height: 100,
        background: isHovering ? '#' + Math.floor(Math.random() * 16777215).toString(16) : 'red',
      }}></div>
  )
}

export default Hover
