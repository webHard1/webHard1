import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0  bg-gray-100 w-full  shadow-md px-8 py-4 z-50">
      <div className="flex items-center justify-between">

       
        <div className="flex items-center gap-3">
          
          <h1 className="text-2xl font-bold text-gray-800 font-serif">
            Nepal Trek
          </h1>
        </div>

        <ul className="hidden md:flex gap-10 text-lg font-semibold text-gray-700">
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

        
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

     
      <ul className={`md:hidden flex flex-col gap-0 text-lg font-semibold text-gray-700 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300 py-3 border-b border-gray-200">
          HOME
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300 py-3 border-b border-gray-200">
          ABOUT
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300 py-3 border-b border-gray-200">
          TREKKING IN NEPAL
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300 py-3">
          PHOTO GALLERY
        </li>
      </ul>

    </nav>
  )
}

export default NavBar