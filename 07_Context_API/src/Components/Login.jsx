import React from 'react'
import userContext from '../Context/Usercontext'
import { useState, useContext } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(userContext)
    

    const handelsubmit = (e) => {
        e.preventDefault();  // POST method ke through kahe par chale jate hai value
        setUser({username , password})


    }
    return (


        <div>

            <h2>Login</h2>
            <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
            <button onClick={handelsubmit}>Submit</button>




        </div>
    )
}

export default Login