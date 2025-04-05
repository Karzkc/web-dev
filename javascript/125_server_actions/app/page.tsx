"use client"
import { formAction } from "@/actions/form";
import { useRef } from "react";
export default function Home() {
  const ref = useRef()

  return (
    <div className="flex justify-center">
      <form ref={ref} action={(e)=>{formAction(e)}}>
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <br />
        <div>
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
            company
          </label>
          <input
            type="text"
            name="company"
            placeholder="company"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
