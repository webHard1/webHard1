import React, { useState } from 'react'
import Modal from './Modal';
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

            price: "RS 45,000",
            duration: "7-10 Days",
            risk: "Moderate",
            accommodation: "Tea Houses & Lodges",
            transportation: "Bus / Jeep",
            review: "4.8/5",
            experience: "Best mix of nature, culture, and Himalayan scenery.",
        },

        {
            title: "Gosaikunda Lake Trek",
            image:
                "https://neptrek.com/wp-content/uploads/2025/12/Turquoise-Gosaikunda-Lake.webp",

            description:
                "The Gosaikunda Lake Trek is both a spiritual and adventurous journey. The trail climbs steeply through forests, rocky paths, and alpine landscapes before reaching the holy Gosaikunda Lake. The lake is believed to be sacred, and pilgrims visit it especially during festivals, creating a mix of culture and devotion. The surrounding views of snow-capped peaks and rugged terrain make the trek challenging but extremely rewarding.",

            price: "RS 42,000",
            duration: "6-9 Days",
            risk: "Moderate to High",
            accommodation: "Tea Houses",
            transportation: "Bus / Jeep",
            review: "4.7/5",
            experience: "Spiritual journey with amazing alpine scenery.",
        },

        {
            title: "Helambu Trek",
            image:
                "https://www.enepaltreks.com/wp-content/uploads/2018/04/helambu.jpg",

            description:
                "The Helambu Trek is a calm and beginner-friendly trek that offers a peaceful escape from busy city life. The trail goes through beautiful green hills, traditional villages, and Buddhist monasteries where you can learn about Sherpa and Hyolmo culture. Unlike high-altitude treks, it stays at a comfortable elevation, making it ideal for people who want mountain views, culture, and nature without too much physical difficulty.",

            price: "RS 28,000",
            duration: "5-7 Days",
            risk: "Easy",
            accommodation: "Comfortable Tea Houses",
            transportation: "Bus / Jeep",
            review: "4.6/5",
            experience: "Perfect for beginners and short peaceful trips.",
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

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Explore peaceful Himalayan trails, sacred lakes, and rich Tamang culture in the Langtang region.
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
    )
}

export default Langtang