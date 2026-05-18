import React, { useState } from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 bg-gray-100 w-full shadow-md px-8 py-4 z-50">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Link to ='/'>
          <h1 className="text-2xl font-bold text-gray-800 font-serif">
            Nepal Trek
          </h1>
          </Link>
        </div>

      
        <ul className="hidden md:flex gap-10 text-lg font-semibold text-gray-700">
          <Link to ='/' >
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            HOME
          </li>
          </Link>

          
          <li
            className="relative cursor-pointer transition duration-300"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span className="hover:text-blue-600 flex items-center gap-1">
              ABOUT
              <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            
            {aboutOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md border border-gray-200 w-48 z-50">
                <Link to ='/nepalTrek' >
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 cursor-pointer text-sm font-semibold text-gray-700 transition duration-200">
                  NEPAL TREK
                </li>
                </Link>
                <Link to ='/aboutNepalTrek' >
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 cursor-pointer text-sm font-semibold text-gray-700 transition duration-200">
                  NEPAL TREK TEAM
                </li>
                </Link>
                <Link></Link>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 cursor-pointer text-sm font-semibold text-gray-700 transition duration-200">
                  SERVICES
                </li>
              </ul>
            )}
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

     
      <ul className={`md:hidden flex flex-col gap-0 text-lg font-semibold text-gray-700 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300 py-3 border-b border-gray-200">
          HOME
        </li>

        {/* ABOUT with mobile dropdown */}
        <li className="cursor-pointer transition duration-300 py-3 border-b border-gray-200">
          <div
            className="flex items-center justify-between hover:text-blue-600"
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
          >
            <span>ABOUT</span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
            <li className="py-2 pl-4 text-sm hover:text-blue-600 border-t border-gray-100">MITERI</li>
            <li className="py-2 pl-4 text-sm hover:text-blue-600 border-t border-gray-100">MITERI TEAM</li>
            <li className="py-2 pl-4 text-sm hover:text-blue-600 border-t border-gray-100">MITERI SERVICES</li>
          </ul>
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