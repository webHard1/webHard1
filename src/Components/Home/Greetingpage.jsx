import React from "react";

export const Greetingpage = () => {
  return (
    <div className=" mt-20 flex flex-col items-center justify-center mt-10 gap-6 px-6">
        <div className="flex gap-1 under">
            
      <h1 className="text-5xl text-red-500 font-bold">
        NAMASTE!
      </h1>

      <h1 className="text-5xl font-serif text-gray-800">
        GREETING!!
      </h1>
        </div>
      <div className="flex justify-center items-center">
  <div className="animate-typing text-blue-900 text-2xl">
    Hello guyz! we are here to serve you a attractive services
  </div>
</div>


      <p className="max-w-5xl text-center text-gray-600 text-lg leading-relaxed">
        Nepal Trek welcomes you to an unforgettable adventure through the breathtaking landscapes of Nepal, where every trail leads to stunning mountain views and memorable experiences.
      </p>
      <p className="max-w-7xl text-center text-gray-600 text-lg leading-relaxed">
       Explore world-famous trekking destinations like Everest Base Camp and the Annapurna region while discovering Nepal’s rich culture, peaceful mountain trails, and stunning natural scenery. From snow-covered peaks and lush forests to traditional villages and warm local hospitality, every journey is filled with adventure, discovery, and inspiration.
      </p>

    </div>
  );
};