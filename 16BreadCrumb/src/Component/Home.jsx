import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
function Home() {
    const [trendingPost,setTrendingPost]=useState(null)
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data)=>{
            const prod=data.products.slice(0,8)
            setTrendingPost(prod)
        }
        );
    },[])
  return (
    <div className="home-page">
        <h2>Home Page</h2>
        <span>Trending Products</span>
        <div className='product-page'>
            {
                trendingPost?.map((prod,index)=>(
                    <div className='card' key={prod.id}>
                        <Link to={`products/${prod.id}`}>
                            <img src={prod.thumbnail} alt={prod.title} />
                            <h2>{prod.title}</h2>
                        </Link>
                    </div>
                )
    
                )
            }
        </div>
        <Link to={"/products"}>
            <button className='prod-button'> View All Products</button>
        </Link>
    </div>
  )
}

export default Home