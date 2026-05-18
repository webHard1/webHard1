import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const slides = [
    {
      image: "image1.jpg",
      caption: "Explore Nepal",
    },
    {
      image: "imagw1.jpg",
      caption: "Adventure Awaits",
    },
    {
      image: "imagw3.jpg",
      caption: "Discover Himalayas",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden mb-10">

      {/* Image */}
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].caption}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Caption */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {slides[currentSlide].caption}
        </h1>

        <p className="text-lg md:text-2xl">
          Experience the beauty of Nepal
        </p>
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full text-2xl"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full text-2xl"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition duration-300 ${
              currentSlide === index
                ? "bg-white scale-110"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;