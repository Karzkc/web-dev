"use client"
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";
import { Presentation } from "@/components/Presentation";


export default function page() {
  
  return (
    <>
      
      
      <div className="main  w-full fl flex-col !justify-start ">
        
        <div id="home" className=" border h-250 w-full flex items-center  p-10">
          <Home />
        </div>
        <div id="about" className=" border h-300 w-full fl !justify-start p-10">
          <About />
        </div>
        <div id="project" className=" border h-300 w-full fl !justify-start ">
          <Projects />
        </div>
        <div id="contact" className=" border h-300 w-full fl !justify-start p-10">
          <Contact />
        </div>

      </div>
    </>
  );
}
