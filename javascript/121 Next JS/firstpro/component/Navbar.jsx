import React from 'react'

const Navbar = () => {
  return (
    <div className='container flex justify-between h-24 border border-white items-center p-10'>
      <div className="logo">Logo</div>
      <div>
        <ul className='flex justify-between items-center gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
