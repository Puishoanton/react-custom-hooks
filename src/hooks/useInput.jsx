import { useState } from 'react'

export const useInput = initialValue => {
  const [value, setInputValue] = useState(initialValue)

  const onChange = e => {
    setInputValue(e.target.value)
  }

  return {
    value,
    onChange,
  }
}
