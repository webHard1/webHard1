import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import Footer from '../Home/Footer';

const Everest = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTrek, setSelectedTrek] = useState(null);

    const treks = [
        {
            title: "Everest Base Camp Trek",
            image:
                "https://excitingnepal.com/wp-content/uploads/2021/12/12-Days-Everest-base-Camp-trek.jpeg",

            description:
                "The Everest Base Camp Trek is the most famous trek in Nepal. It takes you deep into the Khumbu region, where you experience Sherpa culture, suspension bridges, and breathtaking Himalayan scenery. The journey slowly climbs through Namche Bazaar and Tengboche before reaching Everest Base Camp, offering a once-in-a-lifetime view of the world’s highest peak.",
        },

        {
            title: "Gokyo Lakes Trek",
            image:
                "https://worldexpeditions.com/croppedImages/Indian-Sub-Continent/Nepal/Gokyo-_25_-6916844-800px.jpg",

            description:
                "The Gokyo Lakes Trek is known for its peaceful trails and beautiful blue lakes surrounded by mountains. The highlight is the climb to Gokyo Ri, which offers one of the best panoramic views in the Everest region, including Everest itself. It is a quieter alternative to the main EBC trail.",
        },

        {
            title: "Everest Three Passes Trek",
            image:
                "https://media.allnepalhiking.com/uploads/media/Everest-Three-High-Passes-Trek.jpg",
            description:
                "The Everest Three Passes Trek is the most difficult trekking route in the Everest region. It crosses three high mountain passes, offering extreme adventure and unmatched scenery. You experience glaciers, remote valleys, and iconic Everest viewpoints, making it ideal for trekkers who want a full Himalayan challenge.",
        },
          {
            title: "Everest View Trek",
            image:
                "https://cms.discoveryworldtrekking.com/media/6445/everest-view-trek-banner.webp?w=2880&h=1040",

            description:
                "The Everest View Trek is a short and easier option for those who want to see Everest without going too high or trekking for many days. It offers beautiful views of the Himalayas, visits to Sherpa villages, and cultural monasteries like Tengboche, making it a great introduction to the Everest region.",
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


            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-14">

                {treks.map((trek, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                    >

                        {/* Image */}
                        <div className="relative overflow-hidden">

                            <img
                                src={trek.image}
                                alt={trek.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                                <button
                                    onClick={() => openModal(trek)}
                                    className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition"
                                >
                                    View Details
                                </button>

                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            <h1 className="text-2xl font-bold text-gray-800">
                                {trek.title}
                            </h1>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                {trek.description.slice(0, 90)}...
                            </p>

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
        <Footer/>
        </>
  )
}

export default Everest
