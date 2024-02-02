import React,{useState,useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './contexts/index'

function Layout() {
  const [users,setUsers]=useState([])
  const [books,setBooks]=useState([])
  const [currentUser,setCurrentUser]=useState([])
  useEffect(()=>{
    const users=JSON.parse(localStorage.getItem("users"))
    const books=JSON.parse(localStorage.getItem("books"))
    if(users && users.length>0){
      setUsers(users)
    }
    if(books && books.length>0){
      setBooks(books)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("books",JSON.stringify(books))
  },[users,books])
  const addLogindetails=(name,email,book,)=>{
    setUsers((prev)=>[{id:Math.random(),...name,...email,...book},...prev])
  }
  const deleteUserdetails=(id)=>{
    const newUsers=users.filter((user)=>(user.id!==id))
    setUsers(newUsers)
  }
  const allBookdetails=(id)=>{
    const bookUser=books.filter((data)=>data.id===id)
    books.forEach((data)=>data.status=true)
    setCurrentUser((prev)=>[{id:id}])
    if(bookUser.length==0){
      setBooks((prev)=>[{id:id,count:0,status:true},...prev])
    }
  }
  return (
    <UserProvider value={{users,addLogindetails,deleteUserdetails,allBookdetails,books,currentUser}}>
    <Header/>
    <Outlet/>
    <Footer/>
    </UserProvider>
  )
}

export default Layout