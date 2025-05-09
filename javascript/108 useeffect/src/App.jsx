import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

//here alert or console.log occur two times if strictmode at main.jsx is enabled , but if strictmode is disabled then it will occur only once
function App() {
  // let num = 0
  const [count, setCount] = useState(0);

  useEffect(() => { 
    console.log("This will run only when count changes");
  }, [count]);

  //when a state changes , react re-renders the entire components.
  return (
    <>
      <Navbar name={"kartik " + "Khiriya"} />
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
        </button> <br /> <br />

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