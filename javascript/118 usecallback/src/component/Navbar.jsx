import React, { useMemo,memo } from 'react'

const Navbar = ({adj,changeadj}) => {
    console.log("Navbar changed");
    
  return (
    <div>
      I am {adj} Navbar 
      <button onClick={()=>{changeadj()}}>{changeadj()}</button>
    </div>
  )
}

export default memo(Navbar)
