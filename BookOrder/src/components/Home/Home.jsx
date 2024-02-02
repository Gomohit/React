import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/index';
const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const[error,setError]=useState("")
  const navigate  = useNavigate();
  const {users,currentUser,allBookdetails}=useUser()
    
  const logindetails=()=>{
    if(name==="Mohit G" && email=="goyalmohit@admin.com") navigate('/Adminmenu')
    else {
      const user=users.filter((data)=>data.name===name && data.email===email)
      if(user.length==1) {
        // allBookdetails(user[0].id)  
        navigate('/menu')
      }
      else setError("Invalid Login Credentials")
      }
    setName("")
    setEmail("")
  }
  // console.log(users)
  const handleName=(e)=>{
    setName(e.target.value)
    setError("")
  }
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(inputEmail));
  };


  return (
    <div className='max-w-full flex justify-evenly align-middle gap-4'>
    <div className="max-w-md mx-auto mt-8 p-8 mb-10 bg-white border rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-300 p-2 w-full"
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          required
          onChange={handleName}
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
          Email
        </label>
        <input
          className="border border-gray-300 p-2 w-full"
          type="email"
          id="contactNumber"
          placeholder="Enter your email"
          value={email}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address"
          required
          onChange={handleEmailChange}
        />
      </div>

      <p className='text-red-500 text-center text-2xl'>{error}</p>

      {/* Login Button */}
      {name && isValidEmail && <button className='bg-blue-600 px-4 py-2 flex justify-center align-middle self-center mx-auto' onClick={logindetails}>
             Log in
      </button>}
    </div>

    </div>
  );
};

export default Home;
