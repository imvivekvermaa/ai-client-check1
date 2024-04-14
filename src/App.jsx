import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

import Time from './component/Time'
import Card from './Card'

function App() {
  

  // console.log(time)

  return (
    <div className='w-full h-screen bg-gradient-to-r from-zinc-700 to-zinc-950'>
      <Navbar/>
      <Card/>
    </div>
  )
}

export default App
