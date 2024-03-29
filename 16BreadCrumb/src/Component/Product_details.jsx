import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Product_details() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [id]);
  
    return (
      <div>
        <h2>Product Detail Page</h2>
        {product ? (
          <div style={{display:"flex" ,gap:"20px", padding:"0 10px"}}>
            <img style={{height:"300px"}} src={product.thumbnail} alt="Product" />
            <div>
            <h3>{product.title}</h3>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
            </div>
          </div>
        ) : null
        }
      </div>
    );
  };

export default Product_details