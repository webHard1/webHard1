import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-gray-900 text-white shadow-lg">

      {/* Main Footer Section */}
      <div className="w-full relative overflow-hidden">

        {/* Background trekker image - subtle, centered */}
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pt-20 pb-20 px-6 min-h-[400px]">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">MITERI TREK</h1>

            <p className=" leading-7 text-sm mt-2">
              Visit Our Website for Efficient Work.
            </p>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="uppercase text-xl font-bold mb-4">
              Quick Menu
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <Link to='/nepalTrek' >
                <li>

                  <a href="#" className="hover:text-orange-300">
                    About Miteri
                  </a>
                </li>
              </Link>
              <Link to='/nepalTrekTeam' >
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Miteri Trek team
                  </a>
                </li>
              </Link>

            <Link to ='/photoGallery' >
              <li>
                <a href="#" className="hover:text-orange-300">
                  Pictures
                </a> 
              </li>
              </Link>
                <Link to ='/contact' >
              <li>
                <a href="#" className="hover:text-orange-300">
                  Contact Us
                </a>
              </li>
              </Link>
            </ul>
          </div>

          {/* Trekking Places */}
          <div>
            <h3 className="uppercase text-xl font-bold mb-4">
              Trekking Place
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <Link to='/Annapurna' >
                <li>

                  <a href="#" className="hover:text-orange-300">
                    Annapurna Region
                  </a>

                </li>
              </Link>

              <Link to='/everest' >
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Everest Region
                  </a>
                </li>
              </Link>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Dolpa Region
                </a>
              </li>
              <Link to='/upperMustang' >
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Mustang Region
                  </a>
                </li>
              </Link>
              <Link to='/manaslu' >
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Manaslu Region
                  </a>
                </li>
              </Link>
              <Link to='/langtang' >
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Langtang Place
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif uppercase text-xl font-bold mb-4">
              Contact Info
            </h3>

            <div className="text-gray-300 text-sm space-y-3 leading-6">
              <p className="hover:text-orange-300">
                Nayagaun, Lakeside - 15
              </p>

              <p className="hover:text-orange-300">
                mntravelandtrek@hotmail.com
                info@miteritreks.com
              </p>

              <p className="hover:text-orange-300">
                +977(9846039244/9846641036)
                061-434892
              </p>

              {/* <p className="hover:text-orange-300">
                012-121212
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Association Image */}
      <div className="w-full flex justify-center bg-white py-0">
        <img
          src="association.png"
          alt="Association"
          className="w-full h-65 object-contain block"
        />
      </div>

      <div className="w-full  border-t h-10 flex items-center justify-center text-gray-300 font-bold text-center px-4">
        © {new Date().getFullYear()} Miteri Treks Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;