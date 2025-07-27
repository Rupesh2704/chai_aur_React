import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

const About = () => {

    // const [data , setData] = useState([]);
    const data = useLoaderData()
    // useEffect(()=>{

    //     fetch("https://dog.ceo/api/breeds/image/random")    
    //     .then((res)=>res.json())
    //     .then((res)=> {
    //         setData(res.message)
    //     })
    // },[])
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            {

                data ? (<img className='w-auto border-4 border-black h-60 ' src={data} alt="" />) : (<p>Loading...</p>)

            }

            <NavLink to="/About">

                <button

                    className='mt-5 text-3xl text-white bg-black border-2 border-blue-700 rounded-full'>Click me

                </button>
            </NavLink>

        </div>
    )
}

export default About

export const aboutinfo = async () => {

    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()

    return data.message
}