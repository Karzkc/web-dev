import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



const Navbar = ({ name }) => {
  useEffect(() => {
    console.log("This will run on every render");
  });

  useEffect(() => {
    console.log("This will run only once");
  }, []);

  // example of Cleanup func
  useEffect(() => {
    // console.log("This will run on every render");
    return () => {
      console.log("This will run when the parent component is unmounted or removed from app.jsx");
    }
  }, []);
  return (
    <div>
      yo bro , my name is {name}
    </div>
  )
}

export default Navbar
