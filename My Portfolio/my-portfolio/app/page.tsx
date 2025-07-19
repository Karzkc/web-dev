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
        
        <div id="home" className=" h-170 w-full mt-20  p-10">
          <Home />
        </div>
        <div id="project" className=" h-100 w-full fl !justify-start ">
          <Projects />
        </div>
        <div id="about" className=" h-200 w-full fl  p-10">
          <About />
        </div>
        <div id="contact" className=" h-100 w-full fl p-10">
          <Contact />
        </div>

      </div>
    </>
  );
}
