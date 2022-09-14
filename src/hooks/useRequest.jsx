import { useEffect, useState } from 'react'

export const useRequest = request => {
  const [todos, setTodos] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    setIsLoading(true)
    request()
      .then(response => setTodos(response.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return [todos, isLoading, error]
}
