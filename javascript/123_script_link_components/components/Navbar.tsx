import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-10 bg-slate-400'>
            I am Navbar
            <ul className='flex items-center justify-around gap-5'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contacts</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
