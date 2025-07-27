import React from 'react'
import userContext from '../Context/Usercontext'
import { useState, useContext } from 'react'

const Paragraph = () => {

    const [para, setPara] = useState('')

    const { setText } = useContext(userContext)

    const handelshowpara = (e) => {
        e.preventDefault()
        setText({ para })
    }
    return (
        <div>

            <input type="text" name="" id=""
                placeholder='Enter your text here'
                value={para}
                onChange={(e) => setPara(e.target.value)}
            />
            <button onClick={handelshowpara}>Submit</button>

            

        </div>
    )
}

export default Paragraph