import React from 'react'
import userContext from '../Context/Usercontext'
import { useContext } from 'react'

function Profile() {


    const { user, text } = useContext(userContext)
    return (

        <div>
            <p>Welcome: {user.username}</p>    
            <p>Welcome: {text.para}</p>

        </div>
    )

  

}

export default Profile