import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const num = new Array(20_000_000).fill(0).map((_,i)=>{
  return{
    index: i,
    correct_num : i===6969
  }
})
function App() {
  const [count, setCount] = useState(0)
  const [number, setnumber] = useState(num)
  // const correct = num.find(i=>i.correct_num === true)// this will take load on pc instead wthis we will use usememo
  const correct = useMemo(() => number.find(item=>item.correct_num === true), [number]) // memoise our app , instead of computation on each render

  return (
    <>
        Our num is {correct.index}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
