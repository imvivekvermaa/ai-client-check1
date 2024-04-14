import React, { useState } from 'react'

function Time() {
    const [time, setTime] = useState('')
  let localTime= new Date().toLocaleTimeString()

  setInterval(()=>{
    setTime(localTime)
  },2000)

  return (
        <span className='inline-block text-white text-sm items-center'>
            {time}
        </span>
  )
}

export default Time