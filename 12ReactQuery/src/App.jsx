import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>The Awesome React query</h1>
            <div>
                <Link to="/">Home</Link> <br />
                <Link to="/products">Products</Link>
            </div>
    </>
  )
}

export default App
