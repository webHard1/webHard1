import React, { useState } from 'react'
import Modal from './Modal';
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
                "A short trek to Nepal’s lowest glacial lake from Sikles village through forests, waterfalls, and mountain trails.",

            price: "RS 25,000",
            duration: "3-5 Days",
            risk: "Easy to Moderate",
            accommodation: "Tea Houses",
            transportation: "Bus / Jeep",
            review: "4.7/5",
            experience: "Peaceful trek with unique glacier lake scenery.",
        },

        {
            title: "Kori Trek",
            image:
                "https://mountfacenepal.com/uploads/package/gallery/kori-danda.webp",

            description:
                "A hidden trekking gem above Sikles offering rhododendron forests, alpine meadows, and stunning Annapurna views.",

            price: "RS 30,000",
            duration: "4-6 Days",
            risk: "Moderate",
            accommodation: "Tea Houses / Camping",
            transportation: "Bus / Jeep",
            review: "4.8/5",
            experience: "Perfect for solitude and panoramic mountain views.",
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

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Explore hidden trails, peaceful villages, and breathtaking Himalayan viewpoints near Pokhara.
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

                                {/* Info Grid */}
                                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

                                    <div className="bg-gray-100 rounded-xl p-3">
                                        <p className="text-gray-400">Duration</p>
                                        <h2 className="font-semibold text-gray-800">
                                            {trek.duration}
                                        </h2>
                                    </div>

                                    <div className="bg-gray-100 rounded-xl p-3">
                                        <p className="text-gray-400">Risk</p>
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
                                <div className="mt-6">
                                    <p className="text-gray-400 text-sm">Rating</p>
                                    <h2 className="font-bold text-yellow-500">
                                        ⭐ {trek.review}
                                    </h2>
                                </div>

                                {/* Experience */}
                                <div className="mt-5 border-t pt-4">
                                    <p className="text-gray-400 text-sm">Experience</p>
                                    <p className="text-gray-700 mt-1 text-sm">
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
    )
}

export default Kori