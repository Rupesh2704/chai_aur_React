import React, { useState } from 'react'
import { useDispatch } from 'react-redux'  //2

import { addTodo } from '../features/Todo/TodoSlice'; //6
function AddTodo() {

    const [input, setInput] = useState('')  //1

    const dispatch = useDispatch(); //3



    // Dispatch reducer ko use karte hue store ke aander value changes karta hai 
    const addTodoHandler = ((e) => { //4
        e.preventDefault()

        dispatch(addTodo(input))    //5
        setInput('')

    })





    return (
        <form onSubmit={addTodoHandler} className="flex justify-center">
            <input
                type="text"
                placeholder="Write Todo..."
                className="flex w-1/2 mt-10 border-2 border-black"
                value={input}  // wiring
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="px-3 mt-10 text-black bg-green-600 rounded-r-lg shrink-0">
                Add
            </button>
        </form> 
    )
}

export default AddTodo