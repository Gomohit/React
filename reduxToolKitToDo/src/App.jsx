import { useState } from 'react'
import { AddTodo,TodoList } from './components/index'
import './App.css'
import { useEffect } from 'react'

function App() {
  return (
    <>
     <AddTodo/>
     <TodoList/>
    </>
  )
}

export default App
