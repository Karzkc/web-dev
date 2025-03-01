import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'



function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar/></>
    },
    {
      path : "/card",
      element : <><Navbar/><Card/></>
    },
    
  ])

  return (
    <>

    <RouterProvider router={router}/>
    
      
    </>
  )
}

export default App
