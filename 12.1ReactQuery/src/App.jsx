import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
// import Dependent from './Dependent';

function App() {
  

  return (
    <>
    <h3 className='text-center mb-5 text-3xl font-bold'>React Query</h3>
    <div className='flex justify-center gap-5'>
      <Link to='/paginated' className='p-4 bg-blue-600 rounded-md text-white text-xl'>Pagination</Link>
      <Link to='/parallel' className='p-4 bg-blue-600 rounded-md text-white text-xl'>Parallel</Link>
      <Link to='/optimistic' className='p-4 bg-blue-600 rounded-md text-white text-xl'>Optimistic</Link>
      <Link to='/dependent' className='p-4 bg-blue-600 rounded-md text-white text-xl'>Dependent</Link>
    </div>  
    </>
  )
}

export default App
