import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([])
    const data = useLoaderData()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rupesh2704')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res)
    //             setData(res)

    //         })
    // })

    return (

        <div className='justify-center h-screen bg-yellow-100 '>
            <h1 className='mt-20 text-5xl bg-yellow-100'>GitHub Followers:{data.name} </h1>
            <img src={data.avatar_url} alt="Git picture"  />
            <h1 className='text-3xl' >Followers : {data.followers}</h1>

        </div>
    )
}

export default Github

export const githubloder = async()=>{
    
    const response = await fetch('https://api.github.com/users/Rupesh2704')
    return response.json();
}