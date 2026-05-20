import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import Footer from '../Home/Footer';

const Kori = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedTrek, setSelectedTrek] = useState(null);
    
        const treks = [
            {
                title: "Kapuche Lake Trek",
                image:
                    "https://myeveresttrip.com/wp-content/uploads/2024/11/Kapuche-Glacier-Lake.webp",
    
                description:
                    "The Kapuche Lake Trek is famous because it takes you to the lowest glacial lake in Nepal, making it very unique. The journey starts from Sikles village, a beautiful Gurung settlement, and continues through green forests, waterfalls, and remote mountain trails. The lake itself is surrounded by rocky cliffs and snowy peaks, giving a stunning glacier-fed landscape experience in a quiet environment.",
            },
    
            {
                title: "Kori Trek",
                image:
                    "https://mountfacenepal.com/uploads/package/gallery/kori-danda.webp",
    
                description:
                    "The Kori Trek is a hidden gem near Pokhara that takes you high above Sikles village. The trail climbs through dense rhododendron forests, open grasslands, and yak grazing areas. At Kori Danda, you get a breathtaking 360-degree view of the Annapurna range and surrounding peaks. It is a quiet trek, perfect for those who want mountain views and nature without crowds.",
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
                        Kori
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

export default Kori
