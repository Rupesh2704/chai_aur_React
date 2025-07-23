import React from 'react'
import { useParams } from 'react-router-dom'

function AdminInfo() {

    const { id } = useParams()
    return (
        <div className='flex justify-center h-screen bg-yellow-100 '>
            <h1 className='mt-20 text-5xl bg-yellow-100'>AdminInfo :{id}</h1>
            
         </div>
    )
}

export default AdminInfo