import { useState } from 'react'
import Grid from './components/Grid'
import './App.css'

function App() {

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",paddingBottom:"2rem"}}>
      <h1>Selctable Grid</h1>
      <Grid rows={10} columns={10}/>
    </div>
  )
}

export default App
