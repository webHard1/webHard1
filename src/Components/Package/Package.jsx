import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Packages = () => {

    const navigate = useNavigate();
    

  const packages = [
    {
      id: 1,
      name: "Everest Base Camp",
       path: "/everest",
      image:
        "https://www.acethehimalaya.com/wp-content/uploads/2026/01/joyous-at-everest-base-camp-600x450.jpg.webp",
      duration: " 12-19 Days",
    //   price: "RS 12000",
    },

    {
      id: 2,
      name: "Annapurna Base Camp",
      path: "/Annapurna",
      image:
        "https://res.cloudinary.com/activeadventures/image/upload/gpkml5je6d88h2z3ayvx.jpg",
      duration: " 8-9 Days",
    //   price: "RS 9000",
    },

    {
      id: 3,
      name: "Langtang Valley Trek",
      path: "/langtang",
      image:
        "https://www.magicalsummits.com/wp-content/uploads/2023/02/Langtang-Valley-Trek-1.jpg",
      duration: "7-8 Days",
    //   price: "Rs 7000",
    },

    {
      id: 4,
      name: "Upper Mustang Trek",
       path: "/upperMustang",
      image:
        "https://highcampadventure.com/uploads/media/Mustang-Trek-V.jpg",
         
      duration: "9-10 Days",
    //   price: " Rs 6000",
    },

    {
      id: 5,
      name: "Manaslu Circuit Trek",
      path: "/manaslu",
      image:
        "https://www.visithimalayastrek.com/uploads/blogs/a-complete-guide-to-manaslu-circuit-trek-route-visit-himalaya-treks-100679.jpg",
      duration: "12-13 Days",
    //   price: "RS 15000",
    },
    {
      id: 6,
      name: "Kori Trek",
      path: "/kori",
      image:
        "https://www.advadventures.com/admin/postimages/dafa18c556ca5acde3479c9111c15c4b.jpg",
      duration: "2-3 Days",
    //   price: "RS 15000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < packages.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      <div className="pt-24 px-6 flex-1">

        {/* Heading */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-900 font-light">
            Trek
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
            Packages
          </h1>

        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">

          {/* Cards */}
          <div
            className="flex transition-transform duration-500 gap-6"
            style={{
              transform: `translateX(-${currentIndex * 33.5}%)`,
            }}
          >

            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="min-w-full sm:min-w-[48%] lg:min-w-[31%] bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <div className="flex justify-between items-center">

                    <h2 className="text-xl font-bold text-gray-800">
                      {pkg.name}
                    </h2>

                    <span className="text-red-900 font-semibold">
                      {pkg.price}
                    </span>

                  </div>

                  <p className="text-gray-500 mt-2">
                    ⏳ {pkg.duration}
                  </p>

                  <button onClick={()=> navigate(pkg.path)}   className="mt-5 bg-red-900 hover:bg-red-800 text-white px-5 py-2 rounded-lg transition duration-300">
                    Explore Trek
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg px-4 py-2 rounded-full text-2xl"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg px-4 py-2 rounded-full text-2xl"
          >
            ❯
          </button>

        </div>
      </div>

      
    </div>
  );
};

export default Packages;