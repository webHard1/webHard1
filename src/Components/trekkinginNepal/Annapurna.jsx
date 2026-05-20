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
                "Annapurna Circuit Trek Annapurna Circuit Trek is one of the most famous long trekking routes in Nepal. It takes you around the entire Annapurna massif, passing through green valleys, rivers, forests, and high mountain landscapes. The trek becomes more dramatic as you reach higher altitudes, especially when crossing Thorong La Pass at 5,416 meters. Along the way, you experience different cultures like Gurung, Thakali, and Tibetan-influenced villages, making it both a natural and cultural journey.",
        },

        {
            title: "Annapurna Base Camp (ABC) Trek",
            image:
                "https://adventurealtitudetreks.com/uploads/img/abc-trekking.webp",

            description:
                "Annapurna Base Camp Trek is a shorter but very scenic trek that leads directly to the base of Annapurna I. The trail goes through beautiful villages, terraced fields, waterfalls, and rhododendron forests before reaching the base camp at 4,130 meters. From ABC, you are surrounded by tall peaks like Annapurna I, Machhapuchhre, and Hiunchuli, creating a stunning mountain amphitheater view that feels very close and powerful.",
        },

        {
            title: "Ghorepani Poon Hill Trek",
            image:
                "https://himalayatrip.com/wp-content/uploads/2025/01/Accommodation-During-Ghorepani-Poon-Hill-Trek.webp",

            description:
                "Ghorepani Poon Hill Trek is a short and easy trek, perfect for beginners. The main highlight is the sunrise view from Poon Hill at 3,210 meters, where you can see mountains like Dhaulagiri, Annapurna, and Machhapuchhre glowing in golden light. The trail passes through peaceful villages and colorful rhododendron forests, especially beautiful in spring, making it a relaxing and rewarding trekking experience.",
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
    );
};

export default Trekking;