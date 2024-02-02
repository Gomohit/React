import React from 'react'
import { useEffect,useState } from 'react'
function Github() {
    const [gitData,setGitData]=useState([])
    useEffect(()=>{
        fetch('https:api.github.com/users')
        .then((res)=>res.json())
        .then((res)=>setGitData(res))
    },[])
  return (
    <div>
      <div className='bg-gray-700 r flex flex-wrap items-center justify-center pb-10 m-auto'>
      {gitData.map((data)=>(
        <div key={data.id} className=' text-white pr-4 text-3xl'>Github Id : {data.id}
        <img className='mx-auto'
        src={data.avatar_url} alt="" width={300}/>
      </div>
      ))}
      </div> 
    </div>
  )
}
export default Github