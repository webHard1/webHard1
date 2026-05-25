import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

const TrekkingNepal = () => {

  const navigate = useNavigate();

  const treks = [
    {
      title: "Annapurna Region Trek",
      path: "/Annapurna",
      description:
        "Explore beautiful mountain trails, peaceful villages, and stunning Himalayan views in the Annapurna region.",
      image:
        "https://res.cloudinary.com/activeadventures/image/upload/gpkml5je6d88h2z3ayvx.jpg",
    },

    {
      title: "Everest Region Trek",
      path: "/everest",
      description:
        "Experience the legendary Everest trails surrounded by breathtaking snow-capped mountains and Sherpa culture.",
      image:
        "https://www.acethehimalaya.com/wp-content/uploads/2026/01/joyous-at-everest-base-camp-600x450.jpg.webp",
    },

    {
      title: "Langtang Valley Trek",
      path: "/langtang",
      description:
        "Discover peaceful forests, rivers, and mountain landscapes in the beautiful Langtang Valley.",
      image:
        "https://www.magicalsummits.com/wp-content/uploads/2023/02/Langtang-Valley-Trek-1.jpg",
    },

    {
      title: "Manaslu Circuit Trek",
      path: "/manaslu",
      description:
        "Walk through remote Himalayan villages and scenic mountain routes around the Manaslu region.",
      image:
        "https://www.visithimalayastrek.com/uploads/blogs/a-complete-guide-to-manaslu-circuit-trek-route-visit-himalaya-treks-100679.jpg",
    },

    {
      title: "Upper Mustang Trek",
      path: "/upperMustang",
      description:
        "Explore the hidden kingdom of Upper Mustang with its unique desert landscapes and Tibetan culture.",
      image:
        "https://highcampadventure.com/uploads/media/Mustang-Trek-V.jpg",
    },

    {
      title: "Dolpa Trek",
      path: "/Dolpa",
      description:
        "Enjoy the peaceful trekking experience with amazing sunrise views and natural beauty and geography",
      image:
        "https://d1kz4z644261g1.cloudfront.net/locations/featured_images/000/000/319/large/way-to-Chhoi_La.jpg?1535401199",
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className=" flex flex-col bg-gray-50">

      {/* Main Content */}
      <div className="pt-24 px-6 flex-1">

        {/* Heading */}
        <div className="flex flex-wrap gap-2 justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-900 font-light">
            Trekking
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
            in Nepal
          </h1>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">

          {treks.map((photo) => (
            <div
              key={photo.title}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >

              {/* Image Section */}
              <div className="relative overflow-hidden">

                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-60 object-cover transition duration-300 group-hover:blur-lg group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">

                  <button
                    onClick={() => navigate(photo.path)}
                    className="bg-white text-black px-5 py-2     rounded-full font-semibold shadow-lg hover:scale-105 transition"
                  >
                    View Details
                  </button>

                </div>
              </div>

              {/* Content */}
              <div className="p-4">

                <h2 className="text-lg font-semibold text-gray-800">
                  {photo.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {photo.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedPhoto(null)}
          >

            <div
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedPhoto.title}
                </h2>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {selectedPhoto.description}
                </p>

              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-4 text-3xl font-bold text-white hover:scale-110 transition"
              >
                ✕
              </button>

            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default TrekkingNepal;