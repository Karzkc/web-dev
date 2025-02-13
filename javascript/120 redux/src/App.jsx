import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterslice'
import './App.css'


function App() {
  const [number, setNumber] = useState(0)
  const count = useSelector((state) => state.counter.value) /* 8. state value updation to UI */
  const dispatch = useDispatch() 
  const handleincrement = () => {
    {/* 2. click handler function*/ }
    dispatch(increment()); {/* 3. Action dispatched*/ }
  }
  const handledecrement = () => {
    dispatch(decrement())
  }
  const handleincrementnumber = () => {
    dispatch(incrementByAmount(number))
  }

  const handlereset = () => {
    dispatch(reset())
  }



  return (
    <>
      <div className="container">
        <button onClick={handleincrement}> {/* 1 a. onclick (without payload event only)*/}
          Increment +
        </button> <br /><br />
        count : {count} <br /><br />
        <button onClick={handledecrement}>
          decrement -
        </button> <br /><br />
        <button onClick={handlereset}>Reset</button> <br /><br />
        <input type="number" name="num" id="" value={number} onChange={(e) => {
          setNumber(e.target.value)
        }} /> <br /><br />
        <button onClick={handleincrementnumber}>Increment number</button> {/* 1 b. onclick (without payload)*/}
      </div>
    </>
  )
}

export default App
