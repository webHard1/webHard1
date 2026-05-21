import React from "react";

export const Greetingpage = () => {
  return (
    <div className="w-full overflow-hidden pt-5 pb-10 px-4 sm:px-6 flex flex-col items-center justify-center gap-6">

      {/* Heading */}
      <div className="flex flex-wrap justify-center items-center gap-2  text-center w-full">
        <h1 className=" font-light  text-2xl sm:text-5xl md:text-6xl  text-red-900 break-words">
          NAMASTE!
        </h1>

        <h1 className="text-2xl  font-light  sm:text-5xl md:text-6xl font-serif text-gray-800 break-words">
          GREETING!! 
        </h1>
      </div>   

      {/* Animated Text */}
      <div className="w-full flex justify-center">
        <div className="animate-typing text-blue-900 text-sm sm:text-lg md:text-2xl text-center max-w-full break-words">
          Hello guyz! We are here to serve you attractive services.
        </div>
      </div>

      {/* First Paragraph */}
      <p className="max-w-3xl text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Nepal Trek welcomes you to an unforgettable adventure through the breathtaking
        landscapes of Nepal, where every trail leads to stunning mountain views and
        memorable experiences.
      </p>

      {/* Second Paragraph */}
      <p className="max-w-4xl text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Explore world-famous trekking destinations like Everest Base Camp and the
        Annapurna region while discovering Nepal's rich culture, peaceful mountain
        trails, and stunning natural scenery.
      </p>
    </div>
  );
};