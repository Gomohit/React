import React, { useState } from 'react'
import { useUser } from '../../contexts/index';
function Adminmenu() {
  // const {users}=useUser()
  const [isAdd,setisAdd]=useState(false)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [book,setBook]=useState(0)
  const {addLogindetails,deleteUserdetails,users}=useUser()

  const addUser=()=>{
    setisAdd(true)
  }
  const addData=()=>{
    addLogindetails({name:name,email:email,book:book})
  }
  const deleteUser=(id)=>{
    deleteUserdetails(id)
  }
  return (
    <div className='w-full'>
    <div className="flex mt-4 mb-2">
      <button className='bg-blue-500 text-white px-5 py-2 rounded mr-3 ml-auto' onClick={addUser}>+ Add User</button>
    </div>
    {isAdd && <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md" onSubmit={addData}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="issuedBook" className="block text-gray-600 text-sm font-semibold mb-2">
          Issued Product
        </label>
        <input
          type="text"
          id="issuedBook"
          name="issuedBook"
          value={book}
          disabled
          // onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Submit
      </button>
    </form>}
    {users.length > 0 ? (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 text-left border-b">Id</th>
          <th className="py-2 px-4 text-left border-b">Name</th>
          <th className="py-2 px-4 text-left border-b">Email</th>
          <th className="py-2 px-4 text-left border-b">Issued Product</th>
          <th className="py-2 px-4 text-left border-b">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="py-2 px-4 text-left border-b">{index+1}</td>
            <td className="py-2 px-4 text-left border-b">{user.name}</td>
            <td className="py-2 px-4 text-left border-b">{user.email}</td>
            <td className="py-2 px-5 text-left border-b">{user.book}</td>
            <td className="py-2 px-4 text-left border-b">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={(e)=>deleteUser(user.id)}>Delete User</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className='w-full text-3xl text-center mx-auto'>No data To display</p>
  )}
    </div> 
  )
}

export default Adminmenu