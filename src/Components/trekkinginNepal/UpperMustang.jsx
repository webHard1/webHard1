    import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import Footer from '../Home/Footer';

const UpperMustang = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
            const [selectedTrek, setSelectedTrek] = useState(null);
        
            const treks = [
                {
                    title: "Upper Mustang Trek",
                    image:
                        "https://thenepaltrekkingcompany.com/wp-content/uploads/2023/06/upper-mustang-1024x416.jpg",
        
                    description:
                        " The Upper Mustang Trek is one of the most unique treks in Nepal because it feels completely different from the green Himalayas. The landscape is dry, dusty, and desert-like, with dramatic red cliffs and deep valleys. The trail leads to the ancient walled city of Lo Manthang, where you can explore old monasteries, palaces, and Tibetan-influenced culture that has been preserved for centuries. It feels like stepping into a hidden world.",
                },
        
                {
                    title: "Lo Manthang Cultural Trek",
                    image:
                        "https://media.sublimetrails.com/uploads/img/lo-manthang-(2).webp",
        
                    description:
                        "The Lo Manthang Cultural Trek focuses mainly on exploring the ancient walled city of Lo Manthang, the heart of Upper Mustang. The city is full of historic monasteries, traditional houses, and prayer walls that reflect strong Tibetan heritage. The surrounding landscape is dry and dramatic, but the cultural experience inside the city makes it one of the most special trekking destinations in Nepal.",
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
                        Upper Mustang
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

export default UpperMustang
