import React, { useState } from 'react'

const Controlled = () => {
  const [text, setText] =useState('')
  return (
    <div>
      Controlled way : <br />
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} /> <br />
      {text}
    </div>
  )
}

export default Controlled
