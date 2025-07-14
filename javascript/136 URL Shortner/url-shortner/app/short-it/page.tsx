"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [URL, setURL] = useState("")
  const [short, setShort] = useState("")
  const [compress, setCompress] = useState("")

  const handleCompress = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "URL": URL,
      "short": short
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect
    };

    fetch("/api/compress", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result.error) {
          
          setURL("")
        }
        setShort("")
        alert(result.message)
        setCompress(`${process.env.NEXT_PUBLIC_HOST}${short}`)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="content flex flex-col items-center justify-start gap-6 py-25">
      <div className="url-input h-14 w-[480px] flex items-center px-4 rounded-md bg-[#111317]">
        <input
          type="url"
          name="url"
          id="url"
          value={URL}
          onChange={e => { setURL(e.target.value) }}
          placeholder="Enter the URL..."
          required
          className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 text-base"
        />
      </div>
      <div className="url-input h-14 w-[480px] flex items-center px-4 rounded-md bg-[#111317]">
        <input
          type="text"
          name="short"
          id="short"
          value={short}
          onChange={e => { setShort(e.target.value) }}
          required
          placeholder="Enter Shorter Version..."
          className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 text-base"
        />
      </div>

      <div className="submit w-[120px]">
        <input
          type="submit"
          value="Compress"
          onClick={handleCompress}
          className="w-full py-2 bg-white text-black font-semibold rounded-md cursor-pointer hover:bg-gray-300 transition ease-in-out duration-200"
        />
      </div>

      <div className="url-list cursor-pointer">
        {compress&& <Link target='_blank' href={compress}> {compress}</Link>}
      </div>
    </div>
  )
}

export default page
