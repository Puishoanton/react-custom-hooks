import React, { useState } from 'react'
import axios from 'axios'
import useDeBounce from './../hooks/usedeBounce'

const FetchSearching = () => {
  const [input, setinput] = useState('')

  const deBounceSearch = useDeBounce(search, 500)

  async function search(query) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
    console.log(response)
  }

  const onChange = e => {
    setinput(e.target.value)
    deBounceSearch(e.target.value)
  }

  console.log(input)
  return (
    <div>
      <input value={input} onChange={onChange} type='text' />
    </div>
  )
}

export default FetchSearching
