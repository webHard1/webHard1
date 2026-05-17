import React from 'react'


const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0  bg-gray-100 w-full  shadow-md px-8 py-4 z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          
          <h1 className="text-2xl font-bold text-gray-800 font-serif">
            Nepal Trek
          </h1>
        </div>

        {/* Menu */}
        <ul className="flex gap-10 text-lg font-semibold text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            HOME
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            ABOUT
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            TREKKING IN NEPAL
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            PHOTO GALLERY
          </li>
        </ul>
      </div>
     
    </nav>
  )
}

export default NavBar