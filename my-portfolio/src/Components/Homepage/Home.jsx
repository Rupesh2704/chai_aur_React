import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

    // const [data, setData] = useState([])
    const data = useLoaderData();

    // useEffect(() => {

    //     fetch(`https://api.github.com/users/Rupesh2704`)
    //         .then((res) => res.json())
    //         .then((res) => setData(res))
    // })

    if (!data || !data.avatar_url) {
    return <p className="mt-10 text-xl text-center">Loading or something went wrong...</p>;
  }

    return (
        <div className='flex flex-wrap justify-between bg-[#F68537]'>

            <div className='flex flex-col justify-center gap-10 m-10 '>
                <h1 className='font-serif text-5xl'>Rupesh Dahibhate</h1>
                <h2 className='font-serif text-5xl animate-marquee on:hover'>Full-Stack Developer And Designer</h2>

            </div>

            <div>
                <img
                    className='m-10 duration-300 border-2 border-gray-300 rounded-full h-90 w-90 hover:scale-90'
                    src={data.avatar_url} alt="my_photo" />
                    
            </div>








        </div>
    )
}

export default Home

export const homepage = async () => {
    const response = await fetch("https://api.github.com/users/Rupesh2704")
    const data = await response.json()
    

    return data
}