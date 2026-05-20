import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import Footer from '../Home/Footer';

const Mansalu = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
            const [selectedTrek, setSelectedTrek] = useState(null);
        
            const treks = [
                {
                    title: "Annapurna Trek",
                    image:
                        "https://res.cloudinary.com/activeadventures/image/upload/gpkml5je6d88h2z3ayvx.jpg",
        
                    description:
                        "Experience beautiful Himalayan landscapes, peaceful villages, forests, and breathtaking mountain views in the Annapurna region.",
                },
        
                {
                    title: "Everest Trek",
                    image:
                        "https://www.acethehimalaya.com/wp-content/uploads/2026/01/joyous-at-everest-base-camp-600x450.jpg.webp",
        
                    description:
                        "Explore the legendary Everest trails surrounded by snow-capped mountains and rich Sherpa culture.",
                },
        
                {
                    title: "Langtang Trek",
                    image:
                        "https://www.magicalsummits.com/wp-content/uploads/2023/02/Langtang-Valley-Trek-1.jpg",
        
                    description:
                        "Discover peaceful valleys, forests, rivers, and incredible Himalayan scenery near Kathmandu.",
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
                        Mansalu
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

export default Mansalu
