import { useEffect, useState } from 'react'
import { TodoProvider } from './Context/TodoContext'
import Todoform from './components/Todoform'
import TodoItems from './components/TodoItems'
import './App.css'

function App() {

  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {

    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    // if we want to update the the todo then we have to find the todo first and we will get it by its id 
    //  then afte getting id we will update that particular todo with particular id 
    setTodo((prev) => prev.map((eachtodo) => (eachtodo.id === id ? todo : eachtodo)))

  }

  const deleteTodo = (id) => {
    // it will create new array but leaving this provided id 
    setTodo((prev) => prev.filter((eachvalue) => eachvalue.id != id))
  }

  const toggleComplete = (id) => {

    setTodo((prev) => prev.map((eachvalue) => eachvalue.id === id ? { ...eachvalue, completed: !eachvalue.completed } : eachvalue))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }


  }, [])


  useEffect(() => {

    // const todos = JSON.parse(localStorage.setItem("todos"))

    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
          <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
          <div className="mb-4">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItems todo={todo} />

              </div>
            ))}

          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
