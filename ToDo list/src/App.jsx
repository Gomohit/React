import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[text, setText]= useState("")
  const [todo,setTodo] = useState("")
  const [todos,setTodos]=useState([])
  const [selectedTasks, setSelectedTasks] = useState([])
  // const [edittodo,setedit]=useState("")
  useEffect(()=>{
    const data=localStorage.getItem('todos')
    const subHead=localStorage.getItem('title')
    if(data!=null) {
      setTodos(JSON.parse(data))
      setText(JSON.parse(subHead))
    }
  },[])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('title', JSON.stringify(text))
    localStorage.setItem('check', JSON.stringify(selectedTasks))
  }, [todos]);
  
  const addTodo=(e)=>{
    e.preventDefault();
    if(todo!==""){
      const newTask = {
        id: Math.random(),
        Todo: todo,
    }
      setText("To Do List")
      setTodos([...todos,newTask])
      // console.log(JSON.stringify(newTask));
      // localStorage.setItem('todos', JSON.stringify(newTask) )
      setTodo("")
    }
  }
  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    if(newList.length==0){
      setText("")
    }
    setTodos(newList);
};
const editTodo = (id) => {
  let data=""
  for (let i = 0; i < todos.length; i++) {
    // console.log(todos[i].id);
    // console.log(id);
    if(todos[i].id==id){
      data=todos[i].Todo
      setTodo(data)
      deleteTodo(id)     
    }
    
  }
}
const handleCheckbox=(e)=>{
  const checkedId = e.target.value;
   if(e.target.checked && !selectedTasks.includes(checkedId)){
    setSelectedTasks([...selectedTasks,checkedId])
   }else{
    setSelectedTasks(selectedTasks.filter(id=>id !== checkedId))
   }
}
const deleteSelectedTasks = () => {
  console.log(selectedTasks);
  
  const updatedTodos = todos.filter((task) =>!selectedTasks.includes(''+task.id));
  console.log(selectedTasks.includes('0.5866819212125083'));
  console.log(selectedTasks);
  console.log(updatedTodos)
  setTodos(updatedTodos);
  setSelectedTasks([]);
};
  return (
    <>
      <div className='tododiv'>
        <form onSubmit={addTodo}>
        <input type="text" value={todo} placeholder='create a new to do' onChange={(e)=>{setTodo(e.target.value)
        }} onKeyDown={(e) => {
          if (e.key === "Enter")
              {addTodo};
          }} />
        <button className='addButton' onClick={addTodo}>Add</button>
        </form>
        <h3>{text}</h3>
        <ul>
                { todos.map((todo) => (
                    <li className="task" key={todo.id}>
                        <input type="checkbox" className='checkbox' value={todo.id}  onChange={(e)=>(handleCheckbox(e))} />
                        {todo.Todo}
                        <button className='editButton' onClick={() => editTodo(todo.id)}>
                          Edit
                        </button>
                        <button className='delButton' onClick={() => deleteTodo(todo.id)}>
                          Delete
                        </button>

                    </li>
                ))}
            </ul>
            {selectedTasks.length > 0 && (
            <button className='delButton2' onClick={deleteSelectedTasks}>
            Delete Selected
            </button>)}
      </div>
    </>
  )}
export default App
