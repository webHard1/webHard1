import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md h-[60px] px-4 sm:px-6 md:px-8 z-50">

      <div className="flex items-center justify-between h-full">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-80 transition duration-200"
        >
          <img
            src="/logo1.png"
            alt="Nepal Trek"
            className="w-[180px] sm:w-[220px] md:w-[260px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700">

          <Link to="/">
            <li className="hover:text-red-900 cursor-pointer transition duration-300">
              HOME
            </li>
          </Link>

          {/* ABOUT */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span className="flex items-center gap-1 hover:text-red-900 transition duration-300">
              ABOUT

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            {aboutOpen && (
              <ul className="absolute top-full left-0 mt-3 w-52 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 z-50">

                <Link to="/nepalTrek">
                  <li className="px-4 py-3 text-sm hover:bg-gray-100 hover:text-red-900 transition duration-200">
                    NEPAL TREK
                  </li>
                </Link>

                <Link to="/nepalTrekTeam">
                  <li className="px-4 py-3 text-sm hover:bg-gray-100 hover:text-red-900 transition duration-200">
                    NEPAL TREK TEAM
                  </li>
                </Link>

                <Link to="/services">
                  <li className="px-4 py-3 text-sm hover:bg-gray-100 hover:text-red-900 transition duration-200">
                    SERVICES
                  </li>
                </Link>

              </ul>
            )}
          </li>

          <Link to="/trekkingInNepal">
            <li className="hover:text-red-900 cursor-pointer transition duration-300">
              TREKKING IN NEPAL
            </li>
          </Link>

          <Link to="/photoGallery">
            <li className="hover:text-red-900 cursor-pointer transition duration-300">
              PHOTO GALLERY
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-red-900 cursor-pointer transition duration-300">
              CONTACT
            </li>
          </Link>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5"
          onClick={() => setIsOpen(!isOpen)}
        >

          <span
            className={`block h-0.5 w-full bg-gray-700 rounded transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />

          <span
            className={`block h-0.5 w-full bg-gray-700 rounded transition duration-300 ${isOpen ? 'opacity-0' : ''
              }`}
          />

          <span
            className={`block h-0.5 w-full bg-gray-700 rounded transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />

        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute left-0 top-[80px] w-full bg-gray-100 shadow-md overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
      >

        <Link to="/">
          <li className="px-6 py-4 border-b border-gray-200 hover:text-red-900">
            HOME
          </li>
        </Link>

        {/* Mobile About */}
        <li className="border-b border-gray-200">

          <div
            className="flex items-center justify-between px-6 py-4 hover:text-red-900 cursor-pointer"
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
          >
            <span>ABOUT</span>

            <svg
              className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <ul
            className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? 'max-h-40' : 'max-h-0'
              }`}
          >

            <Link to="/nepalTrek">
              <li className="px-10 py-3 text-sm border-t border-gray-100 hover:text-red-900">
                NEPAL TREK
              </li>
            </Link>

            <Link to="/nepalTrekTeam">
              <li className="px-10 py-3 text-sm border-t border-gray-100 hover:text-red-900">
                NEPAL TREK TEAM
              </li>
            </Link>

            <Link to="/services">
              <li className="px-10 py-3 text-sm border-t border-gray-100 hover:text-red-900">
                SERVICES
              </li>
            </Link>

          </ul>
        </li>

        <Link to="/trekkingInNepal">
          <li className="px-6 py-4 border-b border-gray-200 hover:text-red-900">
            TREKKING IN NEPAL
          </li>
        </Link>

        <Link to="/photoGallery">
          <li className="px-6 py-4 border-b border-gray-200 hover:text-red-900">
            PHOTO GALLERY
          </li>
        </Link>

        <Link to="/contact">
          <li className="px-6 py-4 hover:text-red-900">
            CONTACT
          </li>
        </Link>

      </ul>
    </nav>
  )
}

export default NavBar