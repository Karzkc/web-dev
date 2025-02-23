import { useState } from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import './App.css'

function App() {
  const [text, setText] = useState("")
  
  return (
    <>
      <div className="parent">
        I am parent <br />
        
        <div className="child">
          <Card1 text = {text} setText = {setText} />
          <Card2 text = {text} setText = {setText} />
        </div>
      </div>
    </>
  )
}

export default App
