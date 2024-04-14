import React, { useState } from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

function Navbar() {
    const [curTime, setTime]= useState(null)
    const time= new Date().getTime()
    setInterval(()=>{

    },60000)
  return (
    <div className='md:rounded-full sticky top-0 max-w-screen-md mx-auto  py-1 flex items-center bg-black'>
        <div className='flex items-center '>
        <span style={{boxShadow: "0 0 0.25em #00FF19"}} className='md:ml-5 inline w-1.5 h-1.5 rounded-full bg-green-500 ml-2'></span>
            <FaComputer className='text-white w-7 h-7 ml-2'/> <span className='text-green-500 text-xs ml-1 hover:text-green-700'>{"<study room>"}</span>
        </div>
        
        <div className='md:gap-14 md:text-md links flex gap-6 mx-auto font-semibold text-sm text-white'>
            <a className='hover:text-green-500 ' href='#'>Home</a>
            <a className='hover:text-green-500' href='#'>Home1</a>
            <a className='hover:text-green-500' href='#'>Home2</a>
            {}
        </div>
        <div className='md:mr-5 w-25 h-5 bg-white mr-2 rounded-full flex text-center hover:bg-green-500'>
        <button className='flex items-center text-sm ml-2 font-semibold'> Repo
        <FaGithubAlt className='m-2'/>
        </button>

        </div>

        
    </div>
  )
}

export default Navbar
