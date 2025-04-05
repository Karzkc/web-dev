/* eslint-disable prefer-const */
"use client"
export default function Home() {
  const handleAPI = async() => {
    const data = {
      name: "John",
      age: 30,
      city: "New York"
    }
    const response = await fetch('/api/add', {
    
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let res = await response.json();
    console.log(res);
    
  }
  
  return (
    <center>
      <div>
        <p>Next js APIs</p> <br/>
        <button onClick={handleAPI}>click me </button>
      </div>
    </center> 
  );
}
