import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import Footer from '../Home/Footer';

const Mansalu = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
            const [selectedTrek, setSelectedTrek] = useState(null);
        
            const treks = [
                {
                    title: "Manaslu Circuit Trek",
                    image:
                        "https://museumofwander.com/wp-content/uploads/2025/09/Manaslu-circuit-trek-mountains.jpg",
        
                    description:
                        "The Manaslu Circuit Trek is a remote and less-crowded alternative to Annapurna Circuit. The trail follows the Budhi Gandaki River, passing through deep gorges, suspension bridges, and traditional mountain villages. As you go higher, the culture becomes more Tibetan-like, and the scenery changes into dramatic alpine landscapes. The highlight is crossing Larke La Pass, which offers stunning views of Manaslu and surrounding peaks.",
                },
        
                {
                    title: "Tsum Valley Trek",
                    image:
                        "https://www.himalayajourneys.com/assets/images/Manaslu%20tsum%20valley%20trekking.jpg",
        
                    description:
                        "The Tsum Valley Trek is a sacred and isolated valley trek in the Manaslu region. The area is rich in ancient monasteries, prayer flags, and Buddhist traditions that have been preserved for centuries. The valley feels peaceful and untouched, making it ideal for trekkers looking for culture, spirituality, and quiet natural beauty rather than crowds.",
                },
        
                {
                    title: "Manaslu Base Camp Trek",
                    image:
                        "https://media.nepaltrekadventures.com/uploads/img/manaslu-base-camp.webp",
        
                    description:
                        "The Manaslu Base Camp Trek takes you closer to the towering Mount Manaslu. The journey passes through beautiful forests, remote villages, and high alpine areas before reaching base camp. From there, you get incredible views of glaciers and surrounding peaks. It is a quieter trek, perfect for those who want adventure without heavy tourist crowds.",
                },
                 {
                    title: "Rupina La Pass Trek",
                    image:
                        "https://www.himalayajourneys.com/assets/images/manaslu/manaslu-rupinala-pass-trek.jpg",
        
                    description:
                        " remote and rarely crowded, passing through dense forests, waterfalls, and high ridges. The climb to Rupina La Pass is tough but rewarding, offering dramatic views of snow peaks and untouched landscapes. It is ideal for trekkers looking for pure wilderness and solitude.",
                },
                 {
                    title: "Ganesh Himal Base Camp Trek",
                    image:
                        "https://sherpaheritagetrails.com/wp-content/uploads/2025/09/Tsum-Valley-and-Ganesh-himal-base-camp-region.jpg",
        
                    description:
                        "The Ganesh Himal Base Camp Trek is a quiet and scenic trek located between the Manaslu and Langtang regions. It is not as popular as other major treks, which makes it peaceful and less crowded. The trail offers a mix of cultural villages, forests, and high mountain views. From base camp, you can see the stunning Ganesh Himal range along with surrounding peaks, making it a perfect off-the-beaten-path adventure.",
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
