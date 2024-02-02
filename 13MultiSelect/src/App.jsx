import { useEffect, useRef, useState } from 'react'
import './App.css'
import Tab from "./components/Tab"

function App() {
  const [searchTerm,setSearchTerm] = useState("")
  const [suggestion,setSuggestion]=useState([])
  const [selected,setSelected]=useState([])
  const [selectedUserSet,setSelectedUserSet]=useState(new Set())
  const inpRef=useRef(null)
  let debounce

  const fetchUsers=()=>{
    if(searchTerm.trim()=="")return
    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
    .then((res)=>res.json())
    .then((data)=>{
      setSuggestion(data)
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    if(debounce)clearTimeout(debounce)

    debounce=setTimeout(fetchUsers,500)
    return ()=>{clearTimeout(debounce)}
  },[searchTerm])
  const handleSelectUser=(user)=>{
    setSelected([...selected,user])
    setSelectedUserSet(new Set([...selectedUserSet,user.email]))
    setSearchTerm("")
    setSuggestion([])
    inpRef.current.focus()

  }
  const handleRemoveUser=(user,name)=>{
    console.log("name",name)
    const updatedUser=selected.filter((select)=>select.id!=user.id)
    setSelected(updatedUser)
    const updatedSet=new Set(selectedUserSet)
    updatedSet.delete(user.email)
    setSelectedUserSet(updatedSet)
  }
  useEffect(() => {
    inpRef.current.focus()
  }, [])
  const handleKeyDown=(e)=>{
    if(e.key=='Backspace'&& e.target.value===""&& selected.length>0){
      console.log(selected)
      const lastUser=selected[selected.length-1]
      handleRemoveUser(lastUser)
      setSuggestion([])
    }
  }
  return (
    <div className='user-search-cont'>
      <div className='user-search'>
        <div className='user-selected'>
          {/* selected field */}
          {console.log(selected)}
          {selected.map((user, ind) => (
            <Tab 
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={(name) => handleRemoveUser(user,name)}
            />
          ))}
          
          {/* search field */}
          <input 
          ref={inpRef}
          type="text" 
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          placeholder='Search for a User..'
          onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      
      <div className={suggestion?.users?.length?"suggestion_block":"suggestion"}>
        {/* Suggestion list */}
        <ul className='suggestion-list'>{suggestion?.users?.map((user,ind)=>!selectedUserSet.has(user.email)?(
            <li key={user.email} onClick={()=>handleSelectUser(user)}>
              <img 
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`} 
               />
              <span>{user.firstName} {user.lastName}</span> 
            </li>
          ):<></>)}</ul>
      </div>
      
    </div>
  )
}

export default App
