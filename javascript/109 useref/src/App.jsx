import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect,useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // const a = useRef(0)
  const ref = useRef()
  // useref does not cause the component to re-render when its value changes , it is used to persist the value across rerenders of component
  // useEffect(() => {
  //   a.current += 1
  //   console.log("Component rerendered ",a.current);
  // },)

  useEffect(() => {
    console.log("only for first render");
    ref.current.style.backgroundColor = "cyan";
    
  },[count])
  //here is we re not using useref hook , then the value of a resets to 0 on every rerender of component , but as we are using useref , the value of a is preserved and it is incremented on every rerender of component 
// well use useref as its value is persisted across rerenders , also using ref.current we can access the dom element and change its properties , without calling the dom element by id or class name.

  return (
    <>
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
        <button ref={ ref } onClick={() => setCount((count) => count + 1)}>
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
