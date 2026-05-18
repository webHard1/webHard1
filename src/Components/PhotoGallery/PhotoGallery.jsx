import React, { useState } from "react";
import Footer from "../Home/Footer";

const PhotoGallery = () => {
  const photos = [
    { id: 1, name: "Everest View", image: "eve.jfif", desc: "Beautiful view of Mount Everest." },
    { id: 2, name: "Annapurna Trek", image: "imagw1.jpg", desc: "Adventure in Annapurna region." },
    { id: 3, name: "Pokhara Lake", image: "images.jfif", desc: "Peaceful Fewa Lake in Pokhara." },
    { id: 4, name: "Himalaya Sunrise", image: "images (1).jfif", desc: "Sunrise over the Himalayas." },
    { id: 5, name: "Village Life", image: "vil.jfif", desc: "Traditional Nepali village lifestyle." },
    { id: 6, name: "Mountain Trail", image: "download.jfif", desc: "Trekking trail in high mountains." },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
      <div className="pt-24 px-6 flex-1">

        {/* Title */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold">
            PHOTO
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
            GALLERY
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={photo.image}
                alt={photo.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-3 bg-white">
                <h2 className="text-lg font-semibold">{photo.name}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white rounded-xl max-w-md w-full p-5 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              <h2 className="text-2xl font-bold mt-4">
                {selectedPhoto.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {selectedPhoto.desc}
              </p>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-3 text-xl font-bold text-gray-700 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer (FULL WIDTH FIXED) */}
      <Footer />

    </div>
  );
};

export default PhotoGallery;