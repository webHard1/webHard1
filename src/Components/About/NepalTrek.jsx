import React from "react";
import Footer from "../Home/Footer";

const NepalTrek = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between pt-24 pb-12 lg:pt-0 lg:pb-0 pl-4 sm:pl-6 lg:pl-10 overflow-hidden w-full">

        {/* Main layout wrapper */}
        <div className="max-w-[100vw] lg:mr-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full my-auto">

          {/* Left Content - Retains top/bottom padding to stay perfectly aligned */}
          <div className="w-full lg:w-1/2 lg:max-w-[640px] lg:ml-auto pt-12 lg:pt-24 lg:pb-24 pr-4 sm:pr-6 lg:pr-0">

            {/* Heading */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-red-900">
                About
              </h1>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-800">
                Us
              </h1>
            </div>

            {/* Paragraphs */}
            <p className="text-gray-700 text-base sm:text-lg leading-8 text-center lg:text-left">
              Miteri Treks is dedicated to creating unforgettable trekking and
              travel experiences across the beautiful landscapes of Nepal. From
              the towering Himalayan mountains to peaceful villages and ancient
              cultural sites, we help travelers discover the true beauty and
              adventure that Nepal has to offer.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-8 mt-6 text-center lg:text-left">
              Our experienced team organizes guided treks to popular destinations
              such as Everest Base Camp, Annapurna Base Camp, and Langtang
              Valley. We focus on safety, comfort, and authentic local
              experiences so every traveler can enjoy Nepal’s breathtaking
              nature, warm hospitality, and rich traditions with confidence.
            </p>
          </div>

          {/* 
            Right Image Container 
            1. Removed all rounding on desktop (lg:rounded-none) so it reaches the edge corners.
            2. Kept your base heights, but on desktop it spans your full layout height (lg:h-[700px]).
          */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[450px] ml-auto mr-auto lg:h-[700px] overflow-hidden rounded-3xl lg:rounded-none shadow-2xl lg:[clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)]">
            <picture>
              <source
                media="(min-width: 640px)"
                srcSet="https://images.wallpaperscraft.com/image/single/mountain_peak_tourists_148482_3840x2160.jpg"
              />
              <img
                src="https://images.wallpaperscraft.com/image/single/mountain_peak_tourists_148482_3840x2160.jpg"
                alt="Nepal Trek"
                
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

        </div>
      </div>

      <Footer />
    </> 
  );
};

export default NepalTrek;