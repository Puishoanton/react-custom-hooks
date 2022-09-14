import axios from 'axios'
import React from 'react'
import { useRequest } from './../hooks/useRequest'

const Request = () => {
  const [todos, isLoading, error] = useRequest(request)
  async function request() {
    return await axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (isLoading) {
    return <h1>Wait please Todos are loading</h1>
  }
  if (error) {
    return <h1>Error ...</h1>
  }

  return (
    <div>
      {todos &&
        todos.map((el, i) => (
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
    </div>
  )
}

export default Request
