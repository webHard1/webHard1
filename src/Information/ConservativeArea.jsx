import React from "react";
import Footer from "../Components/Home/Footer";

const ConservativeArea = () => {
  return (
    <>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-10">

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
        <div className="max-w-5xl mx-auto space-y-8">

          {/* National Parks + Heritage */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 overflow-x-auto border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              National World Heritage & Parks
            </h2>
            <table className="w-full min-w-[500px] text-sm text-left">
              <thead className="bg-red-900 text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">Area</th>
                  <th className="px-4 py-3">Entry Fee (NPR / USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-50">
                <tr className="bg-white hover:bg-red-50 transition-colors">
                  <td className="px-4 py-4 text-gray-700">Chitwan National Park</td>
                  <td className="px-4 py-4 font-semibold text-red-900">NPR 100 (US $0.74) / Day / Entry</td>
                </tr>
                <tr className="bg-red-50/40 hover:bg-red-50 transition-colors">
                  <td className="px-4 py-4 text-gray-700">Everest National Park</td>
                  <td className="px-4 py-4 font-semibold text-red-900">NPR 1,500 (US $11.11) / Person / Day</td>
                </tr>
                <tr className="bg-white hover:bg-red-50 transition-colors">
                  <td className="px-4 py-4 text-gray-700">Everest Entry Fee</td>
                  <td className="px-4 py-4 font-semibold text-red-900">NPR 3,000 (US $22.22) / Person / Entry</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* National Parks */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 overflow-x-auto border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              National Parks
            </h2>
            <table className="w-full min-w-[500px] text-sm text-left">
              <thead className="bg-red-900 text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">Park</th>
                  <th className="px-4 py-3">Entry Fee (NPR / USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-50">
                {[
                  { name: "Bardiya National Park",       fee: "NPR 1,500 (US $11.11) / Entry" },
                  { name: "Khaptad National Park",        fee: "Free / NPR 1,500 (US $11.11) special entry" },
                  { name: "Langtang National Park",       fee: "NPR 1,500 (US $11.11) / Day" },
                  { name: "Makalu Barun National Park",   fee: "NPR 1,500 (US $11.11) / Entry" },
                  { name: "Rara National Park",           fee: "NPR 3,000 (US $22.22) / Day" },
                  { name: "Shey-Phoksundo National Park", fee: "NPR 3,000 (US $22.22) / Entry" },
                  { name: "Shivapuri National Park",      fee: "NPR 250 (US $1.85) / Entry" },
                ].map((row, i) => (
                  <tr key={i} className={`hover:bg-red-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-red-50/40"}`}>
                    <td className="px-4 py-4 text-gray-700">{row.name}</td>
                    <td className="px-4 py-4 font-semibold text-red-900">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wildlife Reserves */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Wildlife Reserves
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                "Koshi Tappu Wildlife Reserve",
                "Parsa Wildlife Reserve",
                "Suklaphanta Wildlife Reserve",
              ].map((item, i) => (
                <div key={i} className="bg-red-50 border border-red-100 p-4 rounded-xl text-gray-700">
                  {item} <br />
                  <span className="text-red-900 font-semibold">NPR 1,000 (US $7.41) / Entry</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conservation Areas */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Conservation Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {[
                "Annapurna Conservation Area",
                "Kanchenjunga Conservation Area",
                "Manaslu Conservation Area",
                "Gaurishankar Conservation Area",
              ].map((item, i) => (
                <div key={i} className="bg-red-50 border border-red-100 p-4 rounded-xl text-gray-700">
                  {item} <br />
                  <span className="text-red-900 font-semibold">NPR 200–3,000 (US $1.48–$22.22) / Entry (varies)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hunting Reserve */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Hunting Reserve
            </h2>
            <div className="bg-red-50 border border-red-100 p-5 rounded-xl text-gray-700">
              Dhorpatan Hunting Reserve <br />
              <span className="text-red-900 font-semibold">NPR 1,500–3,000 (US $11.11–$22.22) / Entry (varies by permit type)</span>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-4 text-center">* Converted at approximately 1 USD = NPR 135. Rates may vary.</p>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConservativeArea;