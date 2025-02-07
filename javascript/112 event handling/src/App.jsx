import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const [form, setForm] = useState({email:"",phone:""})
  
  const handle_inp = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form); 
  };
  return (
    <>
      <div className="container">
       
        <input type="email" name='email' value={form.email} onChange={handle_inp}/><br />
        <input type="number" name='phone' value={form.phone} onChange={handle_inp}/><br />
      </div>
    </>
  )
}

export default App
