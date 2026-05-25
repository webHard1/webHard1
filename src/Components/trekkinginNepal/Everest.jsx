import React, { useState } from "react";
import Modal from "./Modal";
import Footer from "../Home/Footer";

const Everest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState(null);

  const treks = [
    {
      title: "Everest Base Camp Trek",
      image:
        "https://excitingnepal.com/wp-content/uploads/2021/12/12-Days-Everest-base-Camp-trek.jpeg",

      description:
        "The Everest Base Camp Trek is the most famous trek in Nepal. It takes you deep into the Khumbu region, where you experience Sherpa culture, suspension bridges, and breathtaking Himalayan scenery.",

      price: "RS 1,55,000",
      duration: "12-16 Days",
      risk: "Moderate to High",
      accommodation: "Tea Houses & Lodges",
      transportation: "Flight / Jeep",
      review: "4.9/5",
      experience:
        "A once-in-a-lifetime adventure to the base of the world’s highest mountain.",
    },

    {
      title: "Gokyo Lakes Trek",
      image:
        "https://worldexpeditions.com/croppedImages/Indian-Sub-Continent/Nepal/Gokyo-_25_-6916844-800px.jpg",

      description:
        "The Gokyo Lakes Trek is known for its peaceful trails and beautiful blue lakes surrounded by mountains.",

      price: "RS 2,50,000",
      duration: "12-16 Days",
      risk: "Moderate",
      accommodation: "Tea Houses",
      transportation: "Flight / Jeep",
      review: "4.8/5",
      experience:
        "An unforgettable high-altitude trekking experience with stunning Everest views.",
    },

    {
      title: "Everest Three Passes Trek",
      image:
        "https://media.allnepalhiking.com/uploads/media/Everest-Three-High-Passes-Trek.jpg",

      description:
        "The Everest Three Passes Trek is the most difficult trekking route in the Everest region with thrilling high passes.",

      price: "RS 3,75,000",
      duration: "18-22 Days",
      risk: "High",
      accommodation: "Tea Houses & Mountain Lodges",
      transportation: "Flight / Jeep",
      review: "5.0/5",
      experience:
        "Best for experienced trekkers seeking a complete Everest region adventure.",
    },

    {
      title: "Everest View Trek",
      image:
        "https://cms.discoveryworldtrekking.com/media/6445/everest-view-trek-banner.webp?w=2880&h=1040",

      description:
        "The Everest View Trek is a short and easier option for travelers who want to experience Everest region views.",

      price: "RS 1,45,000",
      duration: "5-7 Days",
      risk: "Easy to Moderate",
      accommodation: "Tea Houses & Lodges",
      transportation: "Flight / Jeep",
      review: "4.7/5",
      experience:
        "Best for beginners and short travelers wanting Everest scenery.",
    },
  ];

  const openModal = (trek) => {
    setSelectedTrek(trek);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-20 px-6">

        {/* Heading */}
        <div className="text-center">
          <div className="flex flex-wrap gap-3 justify-center items-center">

            <h1 className="text-4xl md:text-5xl text-red-900 font-light tracking-wide">
              Everest
            </h1>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
              Treks
            </h1>

          </div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover breathtaking Everest adventures filled with Himalayan
            beauty, Sherpa culture, and unforgettable trekking experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-14">

          {treks.map((trek, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-red-900 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {trek.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h1 className="text-2xl font-bold text-gray-800">
                  {trek.title}
                </h1>

                <p className="text-gray-500 mt-3 leading-relaxed text-sm">
                  {trek.description}
                </p>

                {/* Trek Info */}
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

                  <div className="bg-gray-100 rounded-xl p-3">
                    <p className="text-gray-400">Duration</p>
                    <h2 className="font-semibold text-gray-800">
                      {trek.duration}
                    </h2>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-3">
                    <p className="text-gray-400">Risk Level</p>
                    <h2 className="font-semibold text-gray-800">
                      {trek.risk}
                    </h2>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-3">
                    <p className="text-gray-400">Accommodation</p>
                    <h2 className="font-semibold text-gray-800">
                      {trek.accommodation}
                    </h2>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-3">
                    <p className="text-gray-400">Transport</p>
                    <h2 className="font-semibold text-gray-800">
                      {trek.transportation}
                    </h2>
                  </div>

                </div>

                {/* Review */}
                <div className="flex items-center justify-between mt-6">

                  <div>
                    <p className="text-gray-400 text-sm">User Review</p>
                    <h2 className="font-bold text-yellow-500">
                      ⭐ {trek.review}
                    </h2>
                  </div>
                    <button
                   
                    className="bg-red-900 hover:bg-red-800 text-white px-5 py-2 rounded-xl transition"
                  >
                  Book now
                  </button>

                </div>

                {/* Experience */}
                <div className="mt-5 border-t pt-4">

                  <p className="text-gray-400 text-sm">
                    Trekking Experience
                  </p>

                  <p className="text-gray-700 mt-1 text-sm leading-relaxed">
                    {trek.experience}
                  </p>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedTrek}
        />
      </div>

      <Footer />
    </>
  );
};

export default Everest;