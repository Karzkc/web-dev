import axios from 'axios'
import { useState } from 'react'
function App() {
  const [json, setJson] = useState("")
  const handleData = () => {
    return axios.get('https://randomuser.me/api')
      .then((res) => {
        console.log(res);
        const data = JSON.stringify(res.data);
        setJson(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <>
      <div>
        <button onClick={() => { handleData() }
        }>
          Get data
        </button><br />
        <p>
          {json}
        </p>
      </div>
    </>
  )
}

export default App
