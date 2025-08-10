import CounterButton from './CounterButton'

import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = (num) => {
    setCount(count + num)
  }
  return (
    <>
      <h1>Welcome!</h1>
      <p>{count}</p>
      <CounterButton
        buttonText="Count Up"
        increment={increment}
      />
    </>
  )
}

export default App