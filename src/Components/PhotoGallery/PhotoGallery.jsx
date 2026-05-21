import React, { useState } from "react";
import Footer from "../Home/Footer";

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      name: "Everest View",
      image:
        "https://images.unsplash.com/photo-1720939485733-43c874b6044d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXQlMjBldmVyZXN0fGVufDB8fDB8fHww",
      desc: "Beautiful view of Mount Everest.",
    },

    {
      id: 2,
      name: "Annapurna Trek",
      image:
        "https://www.muchbetteradventures.com/magazine/content/images/2025/10/Annapurna-Circuit-6-1600x1067--1-.jpeg",
      desc: "Adventure in Annapurna region.",
    },

    {
      id: 3,
      name: "Phewa Lake",
      image:
        "https://images.pexels.com/photos/14989388/pexels-photo-14989388.jpeg?cs=srgb&dl=pexels-nishess-shakya-401526881-14989388.jpg&fm=jpg",
      desc: "Peaceful Fewa Lake in Pokhara.",
    },

    {
      id: 4,
      name: "Himalaya Sunrise",
      image:
        "https://boldhimalaya.com/wp-content/uploads/2025/12/sunrise-and-sunset.webp",
      desc: "Sunrise over the Himalayas.",
    },

    {
      id: 5,
      name: "Village Life",
      image:
        "https://www.redcross.org/content/dam/redcross/atg/707x482/SlideShow-NapaEarthquake/Bountiful-2.jpg.transform/768/q70/feature/image.jpeg",
      desc: "Traditional Nepali village lifestyle.",
    },

    {
      id: 6,
      name: "Mountain Trail",
      image:
        "https://imgproxy.natucate.com/7g0oBg7AOOpA57Y5e3SPzmbz_pOcDjBeVOEECR-Rhl8/rs:fill/g:ce/w:3264/h:1836/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlbi85ZjE4YTYzYS03ODRhLTQwMmUtOGYxYy01MzA4MTUyMGM3Y2QvODhlYTQ4N2M2Yy0xNjc5NDg2MzQ3L25hdHVycmVpc2UtbmVwYWwtZ3JlYXQtaGltYWxheWEtdHJhaWwtc2VjdGlvbi00Yi10cmVra2luZy1ncnVwcGUtbmF0dWNhdGUuanBn",
      desc: "Trekking trail in high mountains.",
    },
       {
      id: 7,
      name: "Annapurna",
      image:
        "https://www.acethehimalaya.com/wp-content/uploads/2024/04/capturing-moments-during-annapurna-circuit-trek-spring-1024x768.jpg.webp",
      desc: "A classic Himalayan trek around the Annapurna massif with diverse landscapes, high passes, and rich cultural villages",
    },
       {
      id: 8,
      name: "Upper Mustang Trek",
      image:
        "https://media.sublimetrails.com/uploads/img/lo-manthang-(2).webp",
      desc: "A mystical desert-like Himalayan trek in the ancient Kingdom of Mustang with Tibetan culture, caves, and dramatic landscapes.",
    },
       {
      id: 9,
      name: "Kori",
      image:
        "https://mountfacenepal.com/uploads/package/gallery/kori-danda.webp",
      desc: "Trekking trail in high mountains.",
    },
    {
  id: 10,
  name: "Langtang Valley Trek",
  location: "Rasuwa District, Nepal",
  image:
    "https://www.magicalsummits.com/wp-content/uploads/2023/02/Langtang-Valley-Trek-1.jpg",

  desc:
    "A beautiful Himalayan trek close to Kathmandu featuring glaciers, alpine forests, and rich Tamang culture.",
}


  ];
  {/*usestate hook*/}
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">

      
      <div className="pt-24 px-6 flex-1">

  
          <div className="flex flex-wrap gap-2 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-900 font-light">
            Photo
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
            Gallery
            </h1>
          </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">

          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl duration-300"
            >

              <img
                src={photo.image}
                alt={photo.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">

                <h2 className="text-lg font-semibold text-gray-800">
                  {photo.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {photo.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

       {/*conditional rendering */}

        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedPhoto(null)}
          >

            <div
              className="bg-white rounded-lg max-w-2xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedPhoto.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  {selectedPhoto.desc}
                </p>

              </div>

          
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-4 text-2xl font-bold text-white"
              >
                ✕
              </button>

            </div>
          </div>
        )}
      </div>

 
      <Footer />

    </div>
  );
};

export default PhotoGallery;