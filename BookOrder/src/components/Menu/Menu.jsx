// App.js
import React, { useState,useEffect } from 'react';
import Search from '../Search';
import { useUser } from '../../contexts/index';

const Menu = () => {
    const [bookData,setbookData]=useState([])
    const [searchResults, setSearchResults] = useState([]);
    const [count,setCount]=useState(0)
    const [msg,setMsg]=useState("")
    const {currentUser,users,productdetails}=useUser()
    // console.log(addLogindetails)
    // console.log(users);
    // console.log(books)
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((res)=>setbookData(res.products))
    },[]) 
    // useEffect(()=>{
    //     const count=JSON.parse(localStorage.getItem("count"))
    //     if(count){
    //       setCount(count)
    //     }
    //   },[])
    
    // useEffect(()=>{
    //     localStorage.setItem("count",JSON.stringify(count))
    //   },[count]) 
    const Add=()=>{
        if(count<5) {
            setMsg('')
            setCount(count+1)
            // productdetails(count,currentUser[0].id)
        }
        else setMsg("Not able to add your limit exceed")
    }
    const Delete=()=>{
        if(count>0){
            setCount(count-1)
            // productdetails(count,currentUser[0].id)
            setMsg('')
        } 
        else setMsg("Product not present to remove")   
    }
    // console.log(count)
  const handleSearch = (searchTerm) => {
    if(searchTerm == ''){
        setSearchResults("");
    }else {
        const filteredResults = bookData.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    }
  };
  // console.log(books)
  return (
    <div style={{ textAlign: 'center'}}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Book Menu</h1>
      <Search onSearch={handleSearch} />
       {count ? <p className='text-xl align-middle text-gray-700 mt-3'> Selected product is {count} (max limit upto 5) </p>:null} 
      
      <div className='mt-5'>
        {searchResults.length>0 ? <div>
          {searchResults.map((result,index) => (
           <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-8 shadow-lg" key={index}>
           <div className="md:flex">
           <div className="md:flex-shrink-0">
           <div >
               <img
               className="h-48 w-full object-cover md:h-full md:w-48"
               src={result.images[0]}
               alt="Book Cover"
               />
           </div>
           </div>
           <div className="p-8">
           <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
               {result.title}
           </div>
           <p className="mt-2 text-gray-600">
               {result.description}
           </p>
           <p className="mt-2 text-gray-600 font-bold">
               Rs.&nbsp;{result.price}/-
           </p>
           <div className="mt-4">
           <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={Add} >
                   Add
           </button>
           <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={Delete}>
                   Remove
           </button>
           <p className='text-red-500 mx-auto'>{msg}</p>
           </div>
           </div>
           </div>
       </div>
          ))}
        </div>:<div>
            {bookData.map((data,index)=>(
            <div className="max-w-full mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-8 shadow-lg" key={index}>
            <div className="md:flex">
            <div className="md:flex-shrink-0">
            <div >
                <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={data.images[0]}
                alt="Book Cover"
                />
            </div>
            </div>
            <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {data.title}
            </div>
            <p className="mt-2 text-gray-600">
                {data.description}
            </p>
            <p className="mt-2 text-gray-600 font-bold">
              Rs.&nbsp;{data.price}/-
           </p>
            <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2"  onClick={Add}>
                    Add
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={Delete}>
                    Remove
            </button>
            <p className='text-red-500 mx-auto'>{msg}</p>
            </div>
            </div>
            </div>
        </div>
            ))}
        </div>}
      
      </div>

    </div>
  );
};

export default Menu;
