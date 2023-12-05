import React from 'react'
import { useEffect,useState } from 'react'
function Github() {
    const [gitData,setGitData]=useState({})
    useEffect(()=>{
        fetch('https:api.github.com/users/Gomohit')
        .then((res)=>res.json())
        .then((res)=>setGitData(res))
    },[])
  return (
    <div>
    <div className='bg-gray-700 text-white p-4 text-3xl'>Github Id : {gitData.id}
    <img className='mx-auto'
    src={gitData.avatar_url} alt="" width={300}/>
    </div>
    
    </div>
    
  )
}

export default Github