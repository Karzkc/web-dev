// "use client" // using this make us run app on browser , by default its using server component

import fs from "fs/promises"
// import React, {  useState } from "react";


export default function Home() {
  // const [count, setCount] = useState(0)
  // console.log("hello"); // without using client component - log in terminal otherwise while using client it will run in browser's console
  const file = fs.readFile("./text.json")
  file.then((e)=>{
    console.log(e.toString());
    
  })
  
  return (
    <>
      <div>
        <div>
          {/* count is {count} */}
        </div>
        {/* <button onClick={()=>setCount(count+1)}> */}
          click me
        {/* </button> <br /> */}
      </div>
    </>
  );
}
