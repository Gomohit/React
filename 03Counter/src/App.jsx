import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(15)
  // let counter=15;
  const addValue=()=>{
    if(counter<20){
      counter+=1
      setCounter(counter)
    }
    
    // console.log("clicked",counter);
  }
  const decValue=()=>{
    if(counter>0){
      counter-=1
    setCounter(counter)
    // console.log("clicked dec",counter);
    }
    
  }

  return (
    <>
      <h1>Counter Application</h1>
      <h3>counter {counter}</h3>
      <button onClick={addValue}>Add Counter count</button>
      <button onClick={decValue}>Remove Counter count</button>
    </>
  )
}

export default App
