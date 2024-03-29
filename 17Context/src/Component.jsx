import React from 'react'
import MyContext from './MyContext'
import { useContext } from 'react'
function Component() {
    const {text,setText}=useContext(MyContext)
    const {id,setId}=useContext(MyContext)
    const handleClick=(e)=>{
        setText("Mohit")
        setId(5)
    }
  return (
    <div>
        <h1>Component</h1>
        <h3>{text}</h3>
        <h3>{id}</h3>

        <button onClick={handleClick}>
            Click me
        </button>
    </div>
  )
}

export default Component