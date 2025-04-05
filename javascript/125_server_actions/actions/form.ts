/* eslint-disable prefer-const */
"use server"
import fs from "fs/promises"
export const formAction = async (e: { get: (arg0: string) => unknown; })=> {
    
    console.log(e.get("name"), e.get("company"));

    let a = await fs.writeFile("hello.txt", `Your name is ${e.get("name")} and company is ${e.get("company")}`)
    
    

  }