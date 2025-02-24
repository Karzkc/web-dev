import { useState } from 'react'
import './App.css'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'
Uncontrolled

function App() {
  

  return (
    <>
    <div className='container'>
    <Controlled />
    <Uncontrolled />
    </div>
    </>
  )
}

export default App
