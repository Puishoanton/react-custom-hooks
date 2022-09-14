import React from 'react'
import { useInput } from './../hooks/useInput'

const Form = () => {
  const input = useInput('')
  const click = e => {
    e.preventDefault()
    console.log(input.value)
  }
  return (
    <form>
      <input {...input} type='text' />
      <button onClick={click}>Click</button>
    </form>
  )
}

export default Form
