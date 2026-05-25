import React from "react";

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
            <h1 className="text-2xl font-bold">NEPAL TREK</h1>

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
              <li>
                <a href="#" className="hover:text-orange-300">
                  About Trek
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Intern-Trek Team
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Nepal Details
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Pictures
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Trekking Places */}
          <div>
            <h3 className="uppercase text-xl font-bold mb-4">
              Trekking Place
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                
                <a href="#" className="hover:text-orange-300">
                  Annapurna Place
                </a>
               
              </li>
              

              <li>
                <a href="#" className="hover:text-orange-300">
                  Australia Place
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Dolpa Place
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Mustang Place
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Manaslu Place
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-300">
                  Langtang Place
                </a>
              </li>
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
        © {new Date().getFullYear()} Miteri Treks & Expedition.
      </div>

    </footer>
  );
};

export default Footer;