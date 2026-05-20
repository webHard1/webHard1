import React, { useState } from "react";
import Footer from "../Home/Footer";


const Services = () => {
const photos = [
    {
      id: 1,
      name: "Guided Trekking Tours",
      image:
        "https://images.unsplash.com/photo-1670346044371-509da7ba16e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWwlMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      desc: "Experience Nepal’s breathtaking mountain trails with expert local guides. Enjoy safe, exciting, and unforgettable trekking adventures.",
    },

    {
      id: 2,
      name: "Adventure Packages",
      image:
        "https://images.pexels.com/photos/4555454/pexels-photo-4555454.jpeg",
      desc: "Discover thrilling adventure packages designed for every type of traveler. From camping to hiking, every trip is packed with excitement.",
    },

    {
      id: 3,
      name: "Hotel & Transportation",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/561668850.jpg?k=274d04045a5777412812f674516c6ceaaf3cce0a6f77ff0f7cf2f8bd5fa17136&o=",
      desc: "Travel comfortably with our trusted hotel and transportation services. We handle your stays and travel so your journey stays stress-free.",
    },

    {
      id: 4,
      name: "Cultural & Heritage Tours",
      image:
        "https://images.unsplash.com/photo-1726326477267-f36f1740ad8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWwlMjBjdWx0dXJlfGVufDB8fDB8fHww",
      desc: "Explore Nepal’s rich culture, ancient temples, and local traditions. Experience the true beauty and history of the country.",
    },

    {
      id: 5,
      name: "24/7 Travel Support",
      image:
        "https://images.pexels.com/photos/7689745/pexels-photo-7689745.jpeg",
      desc: "Get reliable assistance anytime during your journey. Our team is always ready to help make your trip smooth and safe.",
    },

    {
      id: 6,
      name: "Mountain Trail",
      image:
        "https://imgproxy.natucate.com/7g0oBg7AOOpA57Y5e3SPzmbz_pOcDjBeVOEECR-Rhl8/rs:fill/g:ce/w:3264/h:1836/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlbi85ZjE4YTYzYS03ODRhLTQwMmUtOGYxYy01MzA4MTUyMGM3Y2QvODhlYTQ4N2M2Yy0xNjc5NDg2MzQ3L25hdHVycmVpc2UtbmVwYWwtZ3JlYXQtaGltYWxheWEtdHJhaWwtc2VjdGlvbi00Yi10cmVra2luZy1ncnVwcGUtbmF0dWNhdGUuanBn",
      desc: "Trekking trail in high mountains.",
    },
  ];
  {/*usestate hook*/}
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  return (
    <div className="min-h-screen flex flex-col">

      
      <div className="pt-24 px-6 flex-1">

  
          <div className="flex flex-wrap gap-2 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-900 font-light">
            OUR 
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
            Services
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
  )
}

export default Services
 