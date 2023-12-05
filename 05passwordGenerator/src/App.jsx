import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const pswRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let psw=""
    let str="ABCDEFGHIJKLMNOPQRSTIUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="1234567890"
    }
    if(charAllowed){
      str+="@!#%^&*()?;;'-+=[]{}"
    }
    for (let i = 0; i < length; i++) {
      const x=Math.floor(Math.random()*str.length)
      psw+=str.charAt(x)
      
    }
    setPassword(psw)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPsw=useCallback(()=>{
    pswRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto my-8 shadow-md rounded-lg px-4 py-4 text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly 
            ref={pswRef}  
        />
        <button
        onClick={copyPsw}
        className='outline-none bg-blue-700 text-white px-3 '
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {setNumberAllowed((prev) => !prev)}}
      />
      <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {setCharAllowed((prev) => !prev)}}
          />
          <label>Characters</label>
      </div>
    </div>
      </div>
    </>
  )
}

export default App
