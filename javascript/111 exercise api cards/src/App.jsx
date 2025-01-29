import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [render, setRender] = useState(false)
  const re_render = () => {
    setRender(!render)
  }
  const [json, setJson] = useState([])
  async function fetch_data() {
    try {
      let api = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!api.ok) {
        throw new Error("Network issue: " + api.status);
      }
      let data = await api.json()
      console.log(data);
      setJson(data)

    } catch (error) {
      console.error("Failed to Fetch the api due to: " + error);
    }
  }
  useEffect(() => {
    
    fetch_data()

  }, [render])

  const Cards = (props) => {
    return (
      <>
        <div className="card border m-4  text-left">
          <div>
            <h1>
              Card {props.id} <br />
            </h1>
            <span className='text-black-500 size-1.5'>
              <b>UserId:</b>
              </span> {props.userId}</div>
          <div>
            <span className='text-black-500 size-1.5'>
              <b>ID:</b>
              </span> {props.id}</div>
          <div>
            <span className='text-black-500 size-1.5'>
              <b>Title:</b>
              </span> {props.title}</div>
          <div>
            <span className='text-black-500 size-1.5'>
              <b>Body:</b>
              </span> {props.body}</div>
        </div>
      </>
    )
  }



  return (
    <>
      <div className='p-4'>

        <button onClick={re_render} className='border h-8 w-40 cursor-pointer' >
          Refresh page!
        </button>
        <div className='container'>
          {json.map((item) => {
            return (
              <Cards key={item.id} userId={item.userId} id={item.id} title={item.title} body={item.body} />
            )
          })}
        </div>


      </div>
    </>

  )
}

export default App
