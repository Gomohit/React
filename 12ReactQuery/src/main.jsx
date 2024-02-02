import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './Products.jsx';
import Product from './Product.jsx';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const queryClient= new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,  //this is global if we make  any query on get data from server it will same for all
    },
  },
})
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/products/:product_id',
    element:<Product/>
  },
  {
    path:'/about',
    element:<about/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>,
)
