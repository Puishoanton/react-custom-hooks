import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useObserve } from './../hooks/useObserve'

const Todos = () => {
  const [todos, setTodos] = useState([])

  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10)

  //   const parent = useRef()
  const children = useRef()

  useObserve(children, async () => fetchingTodos(limit, page))

  async function fetchingTodos(limit, page) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?&_page=${page}&_limit=${limit}`
    )
    setTodos([...todos, ...response.data])
  }

  return (
    <div>
      {todos.map((el, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginLeft: '40px',
            borderBottom: '1px solid black',
          }}>
          <span style={{ color: 'coral', fontSize: '2rem' }}>{i + 1}.</span>
          <h2 style={{ fontSize: '2rem' }}>{el.title}</h2>
          <p style={{ fontSize: '2rem', background: el.completed ? 'green' : 'red' }}>
            {' '}
            completed: {`${el.completed}`}
          </p>
        </div>
      ))}
      <div
        ref={children}
        style={{ background: 'rgba(0,0,128, 0.5)', height: '10px', marginTop: '-10px' }}></div>
    </div>
  )
}

export default Todos
