import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'  //1
import { removeTodo, updateTodo } from '../features/Todo/TodoSlice'


function Todos() {

    const todos = useSelector(state => state.todos) // got an array of todos
    const dispatch = useDispatch() // using i


    // For edit functionality
    const [editid, seteditid] = useState(null)
    const [edittext, setEditedText] = useState('')

    return (
        <div className="flex flex-col justify-center mt-10 todo-container ">
            <h2 className="text-2xl font-bold">Your Todos</h2>
            <ul className="space-y-4">
                {
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-evenly "
                        >


                            {editid === todo.id ?

                                // Equal ho jate hai 
                                <input
                                    value={edittext}
                                    onChange={(e) => setEditedText(e.target.value)}
                                    className="w-1/2 border-2 border-black"
                                />

                                :

                                <span className="w-1/2 text-base font-medium text-gray-800 border-2 border-black bg-slate-500 ">{todo.text}</span>



                            }

                            <div className="space-x-2">


                                {
                                    editid == todo.id ?

                                        <button
                                            className="px-4 py-1 text-white transition-colors bg-yellow-400 rounded-lg hover:bg-yellow-500"
                                            onClick={() => {
                                                dispatch(updateTodo({ id: editid, text: edittext }))
                                                seteditid(null),
                                                    setEditedText('');

                                            }}

                                        >

                                            Save
                                        </button>


                                        :

                                        <div>


                                            <button
                                                onClick={() => dispatch(removeTodo(todo.id))}
                                                className="px-4 py-1 text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600"
                                            >
                                                Delete
                                            </button>

                                            <button
                                                className="px-4 py-1 text-white transition-colors bg-yellow-400 rounded-lg hover:bg-yellow-500"
                                                onClick={() => {
                                                    seteditid(todo.id)
                                                    setEditedText(todo.text)
                                                }}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                }

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Todos






// return (
//     <>

//         <div>
//             Todos
//         </div>

//         {
//             todos.map((todo) => (

//                 <li key={todo.id}>
//                     {todo.text}
//                     <button onClick={onclickhandler}>Delete</button>
//                 </li>

//             ))

//         }




//     </>
// )
// }
