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
  const [prevSlide, setPrevSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setPrevSlide(currentSlide);
    setAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);

    setTimeout(() => setAnimating(false), 700);
  };

  const goToPrev = () => {
    setPrevSlide(currentSlide);
    setAnimating(true);
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

    setTimeout(() => setAnimating(false), 700);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[80vh] overflow-hidden mb-10">

      {/* Previous Image (fade out) */}
      <img
        src={slides[prevSlide].image}
        alt=""
        className={`absolute w-full h-full object-cover transition-all duration-700 ${
          animating ? "opacity-0 scale-110" : "opacity-100"
        }`}
      />

      {/* Current Image (fade in + zoom) */}
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].caption}
        className={`absolute w-full h-full object-cover transition-all duration-700 ${
          animating ? "opacity-100 scale-105" : "opacity-100 scale-100"
        }`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Caption */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
          {slides[currentSlide].caption}
        </h1>

        <p className="text-base sm:text-lg md:text-2xl">
          Experience the beauty of Nepal
        </p>
      </div>

      {/* Prev Button */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-4 rounded-full"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-4 rounded-full"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 sm:bottom-8 w-full flex justify-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPrevSlide(currentSlide);
              setCurrentSlide(index);
              setAnimating(true);
              setTimeout(() => setAnimating(false), 700);
            }}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;