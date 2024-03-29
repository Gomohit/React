import { useState } from 'react'
import MyContext from './MyContext'
import Component from './Component'

function App() {
  const [text, setText] = useState("")
  const [id,setId]=useState(null)
  
  return (
    <div>
      <MyContext.Provider value={{text,setText,id,setId}}>
        <Component/>
      </MyContext.Provider> 
    </div>
  )
}

export default App
