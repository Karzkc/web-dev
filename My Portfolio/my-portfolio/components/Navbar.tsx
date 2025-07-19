import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar h-18 flex items-center justify-around fixed w-full z-10'>
      <div className='font-jetbrains-mono'>
        <Link href={"/"}>
        
        Karzkc
        </Link>
      </div>
      <div className='flex items-center justify-around gap-10'>
        <Link href={"#home"}>Home</Link>
        <Link href={"#project"}>My Work</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
      <div>
        <Link  target='_blank' href={"https://github.com/karzkc"}>Github</Link>
      </div>
    </div>
  )
}

export default Navbar
