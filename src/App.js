import Form from './components/Form'
import React from 'react'
import Hover from './components/Hover'
import Request from './components/Request'
// import Todos from './components/Todos'
// import FetchSearching from './components/FetchSearching'

const App = () => {
  return (
    <div>
      <Form />
      <hr style={{ margin: 50 }} />
      <Hover />
      <hr style={{ margin: 50 }} />
      {/* <Todos /> */}
      {/* <FetchSearching /> */}
      <Request />
    </div>
  )
}

export default App
