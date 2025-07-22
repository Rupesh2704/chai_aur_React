import React, { use, useState } from 'react'


export const Info = ({ counterpass, subject = [], ontextChange }) => {







    return (

        <div style={
            {
                border: "2px solid red"
            }
        }>
            <h1>Component Counter : {counterpass}</h1>


            {
                subject.map((element) => (
                    <p>{element}</p>
                ))
            }

            <input type="text" onChange={(e) => ontextChange(e.target.value)} />



        </div>



    )
}
