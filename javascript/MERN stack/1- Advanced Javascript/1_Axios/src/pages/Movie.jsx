
/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Movie = () => {
    // const api = "https://jsonplaceholder.typicode.com/todos/1"
    // const [data, setData] = useState([])
    // const handleMovieData = async () => {
    //     try {
    //         const res = await axios.get(api)  // automatic json parsing here
    //         console.log(res.data);
    //         setData(res.data)

    //     } catch (error) {
    //         console.log(error);

    //     }
    // }

    // useEffect(() => {
    //     handleMovieData()

    // }, [])

    // return (
    //     <div>
            
    //     </div>
    // )
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );

}

export default Movie
