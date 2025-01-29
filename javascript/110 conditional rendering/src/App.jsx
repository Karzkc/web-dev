import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [tasks, setTasks] = useState([
    { title: "Hi", desc: "Hello" },
    { title: "Code", desc: "Write code" },
    { title: "Eat", desc: "Lunch time" },
    { title: "Meet", desc: "Team sync" },
    { title: "Sleep", desc: "Rest now" }
  ]);

  
  const Hello = (props)=>{
    return (<>
    <div>{props.title}</div> 
    <div>{props.desc}</div>
    </>)
  }
  return (
    <>
      <div>
      <div className="border-red-100 border font-semibold">hoi</div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* 1. conditional rendering method 1 : only if  */}
        {/* {toggle && <button>
          this is a on
        </button>} */}

        {/* 2. conditional rendering method 2 : if else using turnary operator */}
        {toggle ? <button> this is a on </button>:<button> this is a off </button>}
        <br /> <br />
        <button onClick={() => setToggle((!toggle))}>
          toggle
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <Hello title="hello" desc="how are you"/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {tasks.map((item)=>{
        return <Hello key={item.title} title={item.title} desc={item.desc} />
      })}
    </>
  )
}

export default App
