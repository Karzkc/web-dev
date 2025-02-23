import { useReducer, useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type == "INCREMENT") {
      state += 1
      
    } else if (action.type == "DECREMENT") {
      state -= 1
    } else {
      state = 0
    }
    return state

  }
  const [count, dispatch] = useReducer(reducer, 0)


  return (
    <>
      value: {count} <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button> <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button> <br />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button> <br />
    </>
  )
}

export default App
