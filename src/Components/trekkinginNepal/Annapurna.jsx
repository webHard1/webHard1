import React, { useState } from "react";
import Modal from "./Modal";
import Footer from "../Home/Footer";

const Trekking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState(null);

  const treks = [
    {
      title: "Annapurna Circuit Trek",
      image:
        "https://www.acethehimalaya.com/wp-content/uploads/2024/04/capturing-moments-during-annapurna-circuit-trek-spring-1024x768.jpg.webp",

      description:
        "A legendary trekking route around the Annapurna massif with diverse landscapes, cultures, and the thrilling Thorong La Pass.",

      price: "RS 20,000",
      duration: "14-18 Days",
      risk: "Moderate to High",
      accommodation: "Tea Houses & Lodges",
      transportation: "Bus / Jeep",
      review: "4.9/5",
      experience: "Best for adventure seekers and experienced trekkers.",
    },

    {
      title: "Annapurna Base Camp (ABC) Trek",
      image:
        "https://adventurealtitudetreks.com/uploads/img/abc-trekking.webp",

      description:
        "A scenic journey to the base of Annapurna I surrounded by breathtaking Himalayan peaks and peaceful villages.",

      price: "RS 30,000",
      duration: "7-12 Days",
      risk: "Moderate",
      accommodation: "Tea Houses",
      transportation: "Bus / Private Jeep",
      review: "4.8/5",
      experience: "Perfect blend of nature, culture, and mountain scenery.",
    },

    {
      title: "Ghorepani Poon Hill Trek",
      image:
        "https://himalayatrip.com/wp-content/uploads/2025/01/Accommodation-During-Ghorepani-Poon-Hill-Trek.webp",

      description:
        "A short and beginner-friendly trek famous for the magical sunrise views from Poon Hill.",

      price: "RS 18,000",
      duration: "4-6 Days",
      risk: "Easy",
      accommodation: "Comfortable Tea Houses",
      transportation: "Bus / Jeep",
      review: "4.7/5",
      experience: "Ideal for beginners and families seeking a relaxing trek.",
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
              Annapurna
            </h1>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
              Treks
            </h1>
          </div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore Nepal’s most breathtaking trekking destinations with
            unforgettable Himalayan experiences.
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(trek)}
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition"
                  >
                    
                  </button>
                </div>

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

export default Trekking;