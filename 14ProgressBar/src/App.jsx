import { useEffect, useState } from 'react'
import './App.css'
import Progress from './components/Progress'

function App() {
  const [value, setValue] = useState(0)
  const [success,setSuccess]=useState(false)
  useEffect(()=>{
    setInterval(()=>{
      setValue((prev)=>prev+1)
    },100)
  },[])
  return (
    <div className='app'>
      <span>Progress Bar</span>
      <Progress value={value}/>
    </div>
  )
}

export default App
