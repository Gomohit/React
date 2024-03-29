import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Component/Home'
import Product_details from './Component/Product_details'
import Product_Listing from './Component/Product_Listing'
import BreadCrumbs from './Component/BreadCrumbs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='App'>
        <h1>App Store</h1>
        <BreadCrumbs/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/products" element={<Product_Listing/>}/>
          <Route path="/products/:id" element={<Product_details/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
