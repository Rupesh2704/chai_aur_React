import React, { useState } from "react";
import userContext from "./Usercontext";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [text, setText] = useState('')
    return (

        <userContext.Provider value={{ user, setUser, setText, text }}>

            {children}



        </userContext.Provider>



    )

}

export default UserContextProvider;


// Haan bhai, useContext hook ka kaam hota hai data
// ko ek component se doosre component tak share karna, bina props ko manually pass kare.