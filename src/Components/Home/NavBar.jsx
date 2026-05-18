import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-gray-100 w-full shadow-md px-8 py-4 z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <h1 className="text-2xl font-bold text-gray-800 font-serif hover:cursor-pointer">
              Nepal Trek
            </h1>
          </Link>
        </div>
           
        {/* Menu */}
        <ul className="flex gap-10 text-lg font-semibold text-gray-700">
          <Link to="/">
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              HOME
            </li>
          </Link>

          <Link to="/about">
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              ABOUT
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              CONTACT
            </li>
          </Link>

          <Link to="/photoGallery">
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              PHOTO GALLERY
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar