import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Product() {
    const params=useParams()
    const product_id=params.product_id
    // console.log(params);

    // Mutation
    // const {isPending,isError}=useMutation({})  //this way or
    const mutation=useMutation({
        mutationFn:(newProduct)=>{
            return axios.put(`https://dummyjson.com/products/${product_id}`,newProduct)
        }
    })


    
    // console.log(product_id)
    const fetchProduct=async()=>{
        const response=await fetch(`https://dummyjson.com/products/${product_id}`)
        const data=await response.json()
        return data
    }
    const {isLoading,error,data:product}=useQuery({queryKey:["product",product_id],queryFn:fetchProduct})
    // console.log(product)
  if(isLoading){
    return <h3>Loading...</h3>
  }  
  if(error){
    <h3>{error.message}</h3>
  }
//   if(mutation.isPending){
//     return <h3>Updating...</h3>
//   }
  if(mutation.isError){
    return <h3>Updation have some error {mutation.error.message}</h3>
  }
  return (
    // <div>mohit</div>
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
        {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}  
            <div className="">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.category}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-start gap-5">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <Link to={`/products/${product.id}`}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    {/* </Link> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                {mutation.isPending?(
                    <button className='bg-blue-500 p-3 rounded-md' disabled>
                    Loading...
                    </button>
                ):
                (<button className='bg-blue-500 p-3 rounded-md'
                            onClick={() => {
                            mutation.mutate({title: 'Do Laundry' })
                            }} >    
                            Update Product
                        </button>)
                        }
              </div>
              
            </div>
        {/* </div> */}
      </div>
      
    </div>
  )
}

export default Product