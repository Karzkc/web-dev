import React, { useRef } from 'react'

const Uncontrolled = () => {
    
    const inputRef = useRef(null);
    
    const handleClick = () => {
      alert(`Text is : ${inputRef.current.value}`);
      
    }
    

    return (
        <div>
            Uncontrolled way : <br />
            <input type="text" id='text' ref={inputRef} /> <br />
            <button onClick={handleClick}>Show Value</button>
        </div>
    )
}

export default Uncontrolled
