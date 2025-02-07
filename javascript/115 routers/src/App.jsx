
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import User from './component/User'






function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path : "/login",
      element : <><Navbar/><Login/></>
    },
    {
      path : "/About",
      element : <><Navbar/><About/></>
    },
    {
      path : "/user/:username",
      element : <><Navbar/><User/></>
    }
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
