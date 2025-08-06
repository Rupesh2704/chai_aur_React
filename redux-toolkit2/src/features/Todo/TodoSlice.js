import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state 
const initialState = {
    todos: [

    ]
}

export const todoSlice = createSlice({
    name: 'todo',   // name
    initialState,    // initial state
    reducers: {      // reducers contain properties and function


        // State-> you will have access to the current state value
        // Action-> Actions will provide you some values that will help you to perform some actions like delete todo to get id  
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),  // will provide you an unique id 
                text: action.payload
            }

            // Taking access of state and push the new todo into todos array
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {


            // this will remove the id which matches with payload
            // Filter will always retun true value
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)


        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? { ...todo, text: action.payload.text } : todo)

        }
    }

})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;