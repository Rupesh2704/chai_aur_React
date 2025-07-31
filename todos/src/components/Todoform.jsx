import React, { useState } from 'react'
import { UseTodo } from '../Context/TodoContext'

function Todoform() {

    const [todo, setTodo] = useState(" ")

    const { addTodo } = UseTodo()

    const add = (e) => {
    
        e.preventDefault();
        if (!todo) {
            return
        } else {

            addTodo({
                todo, completed: false
            })
            setTodo("")

        }
    }



    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}  // wiring
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0">
                Add
            </button>
        </form>
    );
}

export default Todoform