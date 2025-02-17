"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { axios } from "axios"

const Loginpage = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""

  })
  const handlelogin = async () => {

  }

  return (
    <div className="flex flex-col justify-center items-center   min-h-screen border border-white">
      <h1 className='text-lg text-white'>Login Page</h1> <br />
      <div className="forms space-y-4 p-6 bg-gray-100 rounded-lg shadow-md  mx-auto">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-medium">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter Username"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>

          <label htmlFor="password" className="block text-gray-700 font-medium">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter Password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handlelogin}
          className=" w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">
          Login
        </button> <br />
        <Link
          href="/signup"
          className=" text-blue-600 text-sm hover:text-blue-400 font-medium transition "
        >
          Not a User? Sign Up Now!
        </Link> <br />
        <Link
          href="/"
          className=" text-blue-600 text-sm hover:text-blue-400 font-medium transition "
        >
          Return to Home!
        </Link>



      </div>

    </div>
  )
}

export default Loginpage
