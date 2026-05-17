import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#008B8B] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
       
        <div>
   <img src="loGo.png" alt="jfvj" />          <p className="text-gray-300 leading-7 text-sm">
           Visit Our Website for Efficient Work.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Menu</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-orange-400">About Trek</a></li>
            <li><a href="#" className="hover:text-orange-400">Intern-Trek Team</a></li>
            <li><a href="#" className="hover:text-orange-400">Nepal Details</a></li>
            <li><a href="#" className="hover:text-orange-400">Pictures</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Trekking Regions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Trekking place</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-orange-300">Annapurna place</a></li>
            <li><a href="#" className="hover:text-orange-300">Australia place</a></li>
            <li><a href="#" className="hover:text-orange-300">Dolpa place</a></li>
            <li><a href="#" className="hover:text-orange-300">Mustang place</a></li>
            <li><a href="#" className="hover:text-orange-300">Manaslu place</a></li>
            <li><a href="#" className="hover:text-orange-300">Langtang place</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <div className="text-gray-300 text-sm space-y-3 leading-6 ">
            <p className="hover:text-orange-300">Zero, Barsta - 15, Pokhara, Nepal</p>
          
            <p className="hover:text-orange-300">intertrek@gmail.com</p>
            <p className="hover:text-orange-300">+977 980000010 / 9811188111</p>
            <p className="hover:text-orange-300">012-121212</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center  text-sm">
        <marquee behavior="scroll" direction="right">
        <p>
          © {new Date().getFullYear()} Nepal Treks & Expedition. 
        </p>
        </marquee>
      </div>
    </footer>
  );
};

export default Footer;