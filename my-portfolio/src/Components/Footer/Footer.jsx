import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' h-20 fixed bottom-0 w-full py-6 text-white bg-[#1B3C53] '>
      <div className='container flex items-center justify-between h-20 px-6 mx-auto'>
        <div>
          <Link>
            <img className="mb-10 duration-300 border-2 rounded-full border-white-300 object-coverw-auto h-14" src="https://images.pexels.com/photos/33056799/pexels-photo-33056799.jpeg" alt="" />
          </Link>
        </div>


        <div className='flex gap-10 mb-10'>
          <NavLink
            to="https://instagram.com"
            className={() => `font-serif block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
          >
            Instagram
          </NavLink>

          <NavLink
            to="https://facebook.com"
            className={() => ` font-serif block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
          >
            FaceBook
          </NavLink>

          <NavLink
            to="https://github.com"
            className={() => `font-serif block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
          >
            Github
          </NavLink>


        </div>







      </div>
    </footer>
  )
}

export default Footer