import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const Packages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "Everest Base Camp",
      path: "/everest",
      image: "https://www.acethehimalaya.com/wp-content/uploads/2026/01/joyous-at-everest-base-camp-600x450.jpg.webp",
      duration: "12-19 Days",
    },
    {
      id: 2,
      name: "Annapurna Base Camp",
      path: "/Annapurna",
      image: "https://res.cloudinary.com/activeadventures/image/upload/gpkml5je6d88h2z3ayvx.jpg",
      duration: "8-9 Days",
    },
    {
      id: 3,
      name: "Langtang Valley Trek",
      path: "/langtang",
      image: "https://www.magicalsummits.com/wp-content/uploads/2023/02/Langtang-Valley-Trek-1.jpg",
      duration: "7-8 Days",
    },
    {
      id: 4,
      name: "Upper Mustang Trek",
      path: "/upperMustang",
      image: "https://highcampadventure.com/uploads/media/Mustang-Trek-V.jpg",
      duration: "9-10 Days",
    },
    {
      id: 5,
      name: "Manaslu Circuit Trek",
      path: "/manaslu",
      image: "https://www.visithimalayastrek.com/uploads/blogs/a-complete-guide-to-manaslu-circuit-trek-route-visit-himalaya-treks-100679.jpg",
      duration: "12-13 Days",
    },
    {
      id: 6,
      name: "Dolpa Trek",
      path: "/Dolpa",
      image: "https://d1kz4z644261g1.cloudfront.net/locations/featured_images/000/000/319/large/way-to-Chhoi_La.jpg?1535401199",
      duration: "2-3 Days",
    },
  ];

  const totalSlides = packages.length - 3 + 1; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handlePrev = () => {
    stopAutoScroll();
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
    startAutoScroll();
  };

  const handleNext = () => {
    stopAutoScroll();
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    startAutoScroll();
  };

  const handleDot = (i) => {
    stopAutoScroll();
    setCurrentIndex(i);
    startAutoScroll();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-24 px-8 flex-1">

        {/* Heading */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-900 font-light">
            Trek
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
            Packages
          </h1>
        </div>

        {/* Slider Container */}
        <div
          className="relative max-w-7xl mx-auto overflow-hidden px-2"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {/* Cards Track */}
          <div
            className="flex transition-transform duration-1000 gap-7"
            style={{ transform: `translateX(-${currentIndex * 33.5}%)` }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="min-w-full sm:min-w-[48%] lg:min-w-[31%] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-gray-800 leading-snug">
                      {pkg.name}
                    </h2>
                  </div>

                  <p className="text-gray-400 text-sm flex items-center gap-1">
                    <span>⏳</span>
                    <span>{pkg.duration}</span>
                  </p>

                  <hr className="border-gray-100" />
                   

                   {/* Button for book now */}

                  <button
                    onClick={() => navigate(pkg.path)}
                    className="mt-1 w-full bg-red-900 hover:bg-red-800 active:bg-red-950 text-white text-sm font-semibold tracking-wide px-5 py-2.5 rounded-xl transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-[45%] -translate-y-1/2 bg-white border border-gray-200 shadow-md hover:bg-red-900 hover:text-white hover:border-red-900 w-10 h-10 rounded-full text-xl flex items-center justify-center transition-all duration-300"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-[45%] -translocate-y-1/2 bg-white border border-gray-200 shadow-md hover:bg-red-900 hover:text-white hover:border-red-900 w-10 h-10 rounded-full text-xl flex items-center justify-center transition-all duration-300"
          >
            ❯
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-6 bg-red-900" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Packages;