import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-[#008B8B] text-white">

      {/* Main Footer Section */}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pt-20 pb-20 px-6 min-h-[400px]">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">NEPAL TREK</h1>
          <p className="text-gray-300 leading-7 text-sm mt-2">
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
              <a href="#" className="hover:text-orange-400">
                About Trek
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400">
                Intern-Trek Team
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400">
                Nepal Details
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400">
                Pictures
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

      
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

  
        <div>
          <h3 className="font-serif uppercase text-xl font-bold mb-4">
            Contact Info
          </h3>

          <div className="text-gray-300 text-sm space-y-3 leading-6">
            <p className="hover:text-orange-300">
              Zero, Barsta - 15, Pokhara, Nepal
            </p>

            <p className="hover:text-orange-300">
              intertrek@gmail.com
            </p>

            <p className="hover:text-orange-300">
              +977 980000010 / 9811188111
            </p>

            <p className="hover:text-orange-300">
              012-121212
            </p>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-10 pt-5 text-center  text-sm">
        <marquee behavior="scroll" direction="right">
          © {new Date().getFullYear()} Nepal Treks & Expedition.
        </marquee>
      </div>

    </footer>
  );
};

export default Footer;