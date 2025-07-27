import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='text-white shadow-md bg-[#1B3C53]'>

            <div className="container flex items-center justify-between h-20 px-6 mx-auto">
                <div >
                    <Link to="" className="flex items-center">
                        <img className="object-cover w-auto transition-transform duration-300 border-2 border-gray-300 rounded-full h-14 hover:scale-105" src="https://images.pexels.com/photos/33056799/pexels-photo-33056799.jpeg" alt="" />
                    </Link>
                </div>

                <div className='flex gap-10 '>
                    <NavLink
                        to="/Home"
                        className={
                            ({ isActive }) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                            ${isActive ? "text-orange-500" : "text-white"}
                            `
                        }>
                        Home
                    </NavLink>

                    <NavLink
                        to="/About"
                        className={
                            ({ isActive }) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                            ${isActive ? "text-orange-500" : "text-white"}
                            `
                        }>
                        About
                    </NavLink>




                </div>

            </div>
        </nav>
    )
}

export default Navbar