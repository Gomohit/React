import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // color="olive"
  let  [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full !important h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
        <button className='outline-none px-4 py-1 text-white bg-red-600 rounded-full'onClick={()=>setColor("red")}>Red</button>
        <button className='outline-none px-4 py-1 text-white bg-green-600 rounded-full'onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-4 py-1 text-white bg-blue-600 rounded-full'onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-4 py-1 text-white bg-yellow-400 rounded-full'onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-1 text-white bg-gray-600 rounded-full'onClick={()=>setColor("gray")}>Gray</button>
        <button className='outline-none px-4 py-1 text-white bg-violet-600 rounded-full'onClick={()=>setColor("violet")}>Violet</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
