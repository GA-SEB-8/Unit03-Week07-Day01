import CounterButton from './Components/CounterButton'
import CounterDisplay from './Components/CounterDisplay'

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
      <CounterDisplay
        counter={count}
      />
      <CounterButton
        buttonText="Count Up"
        increment={increment}
      />
    </>
  )
}

export default App