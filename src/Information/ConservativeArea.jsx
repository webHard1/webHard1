import React from "react";
import Footer from "../Components/Home/Footer";

const ConservativeArea = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-10">

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <h1 className="text-4xl md:text-5xl text-red-900 font-light tracking-wide">
            Conservation
          </h1>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
            Areas & Fees
          </h1>
        </div>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Entry permits and fee structure for National Parks, Wildlife Reserves,
          Conservation Areas, and Hunting Reserves in Nepal.
        </p>
      </div>

      {/* TABLE WRAPPER */}
      <div className="max-w-7xl mx-auto space-y-10">

        {/* National Parks + Heritage */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 overflow-x-auto border">
          <h2 className="text-2xl font-semibold text-red-900 mb-5">
            National World Heritage & Parks
          </h2>

          <table className="w-full min-w-[700px] border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-red-900 text-white">
                <th className="p-4 text-left">Area</th>
                <th className="p-4 text-left">Entry Fee (NPR)</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Chitwan National Park</td>
                <td className="p-4">NPR 100 / Day / Entry</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-4">Everest National Park</td>
                <td className="p-4">NPR 1500 / Person / Day</td>
              </tr>

              <tr>
                <td className="p-4">Everest Entry Fee</td>
                <td className="p-4">NPR 3000 / Person / Entry</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* National Parks */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 overflow-x-auto border">
          <h2 className="text-2xl font-semibold text-red-900 mb-5">
            National Parks
          </h2>

          <table className="w-full min-w-[900px] border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-red-900 text-white">
                <th className="p-4 text-left">Park</th>
                <th className="p-4 text-left">Entry Fee</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">

              <tr className="border-b">
                <td className="p-4">Bardiya National Park</td>
                <td className="p-4">NPR 1500 / Entry</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-4">Khaptad National Park</td>
                <td className="p-4">Free / NPR 1500 (special entry)</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Langtang National Park</td>
                <td className="p-4">NPR 1500 / Day</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-4">Makalu Barun National Park</td>
                <td className="p-4">NPR 1500 / Entry</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Rara National Park</td>
                <td className="p-4">NPR 3000 / Day</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-4">Shey-Phoksundo National Park</td>
                <td className="p-4">NPR 3000 / Entry</td>
              </tr>

              <tr>
                <td className="p-4">Shivapuri National Park</td>
                <td className="p-4">NPR 250 / Entry</td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Wildlife Reserves */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border">
          <h2 className="text-2xl font-semibold text-red-900 mb-5">
            Wildlife Reserves
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm sm:text-base text-gray-700">

            <div className="bg-gray-50 p-4 rounded-xl">
              Koshi Tappu Wildlife Reserve <br />
              <span className="text-red-900 font-semibold">NPR 1000 / Entry</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              Parsa Wildlife Reserve <br />
              <span className="text-red-900 font-semibold">NPR 1000 / Entry</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              Suklaphanta Wildlife Reserve <br />
              <span className="text-red-900 font-semibold">NPR 1000 / Entry</span>
            </div>

          </div>
        </div>

        {/* Conservation Areas */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border">
          <h2 className="text-2xl font-semibold text-red-900 mb-5">
            Conservation Areas
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">

            {[
              "Annapurna Conservation Area",
              "Kanchenjunga Conservation Area",
              "Manaslu Conservation Area",
              "Gaurishankar Conservation Area",
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-xl">
                {item} <br />
                <span className="text-red-900 font-semibold">
                  NPR 200–3000 / Entry (varies)
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* Hunting Reserve */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border">
          <h2 className="text-2xl font-semibold text-red-900 mb-5">
            Hunting Reserve
          </h2>

          <div className="bg-gray-50 p-5 rounded-xl text-gray-700">
            Dhorpatan Hunting Reserve <br />
            <span className="text-red-900 font-semibold">
              NPR 1500 – 3000 / Entry (varies by permit type)
            </span>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ConservativeArea;