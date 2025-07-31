import React from "react";
import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Message ",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id, todo) => { },
    updateTodo: (todo, id) => { },
    toggleComplete: (id) => { }
})

export const UseTodo = () => {

    return useContext(TodoContext)


}

export const TodoProvider = TodoContext.Provider;