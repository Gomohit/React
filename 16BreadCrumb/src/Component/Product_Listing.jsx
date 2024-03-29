import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Product_Listing() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data)=>{
            setProducts(data.products)
        }
        );
    },[])
  return (
    <div>
        <h2>Product_Listing</h2>
        <span>Trending Products</span>
        <div className='product-page'>
            {
                products?.map((prod,index)=>(
                    <div className='card' key={prod.id}>
                        <Link to={`/products/${prod.id}`}>
                            <img src={prod.thumbnail} alt={prod.title} />
                            <h2>{prod.title}</h2>
                        </Link>
                    </div>
                )
    
                )
            }
        </div>
    </div>
  )
}

export default Product_Listing