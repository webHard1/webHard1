import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import Footer from '../Home/Footer';

const Langtang = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedTrek, setSelectedTrek] = useState(null);
    
        const treks = [
            {
                title: "Langtang Valley Trek",
                image:
                    "https://www.magicalsummits.com/wp-content/uploads/2023/02/Langtang-Valley-Trek-1.jpg",
    
                description:
                    "The Langtang Valley Trek is one of the most beautiful treks close to Kathmandu. The journey begins with lower green hills and slowly moves into deep forests filled with rhododendron and pine trees. Along the way, you pass traditional Tamang villages where you can experience local culture and lifestyle. As you reach Kyanjin Gompa, the landscape becomes open and dramatic, surrounded by glaciers and towering mountains like Langtang Lirung, making it a perfect mix of nature, culture, and adventure.",
            },
    
            {
                title: "Gosaikunda Lake Trek",
                image:
                    "https://neptrek.com/wp-content/uploads/2025/12/Turquoise-Gosaikunda-Lake.webp",
    
                description:
                    "The Gosaikunda Lake Trek is both a spiritual and adventurous journey. The trail climbs steeply through forests, rocky paths, and alpine landscapes before reaching the holy Gosaikunda Lake. The lake is believed to be sacred, and pilgrims visit it especially during festivals, creating a mix of culture and devotion. The surrounding views of snow-capped peaks and rugged terrain make the trek challenging but extremely rewarding.",
            },
    
            {
                title: "Helambu Trek",
                image:
                    "https://www.enepaltreks.com/wp-content/uploads/2018/04/helambu.jpg",
    
                description:
                    "The Helambu Trek is a calm and beginner-friendly trek that offers a peaceful escape from busy city life. The trail goes through beautiful green hills, traditional villages, and Buddhist monasteries where you can learn about Sherpa and Hyolmo culture. Unlike high-altitude treks, it stays at a comfortable elevation, making it ideal for people who want mountain views, culture, and nature without too much physical difficulty.",
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
                        Langtang
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

export default Langtang
