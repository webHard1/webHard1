import React from 'react'
import Footer from '../Components/Home/Footer'

const TrekkingPermit = () => {
const permits = [
    { sn: 1, area: "Dolpa District", sub: "a. Lower Dolpa\nb. Upper Dolpa", fee: "Lower Dolpa: NPR 2,700 (US $20)/person/week; NPR 675 (US $5)/person/week beyond 1 week\nUpper Dolpa: NPR 67,500 (US $500)/person for first 10 days; NPR 6,750 (US $50)/person/day thereafter" },
    { sn: 2, area: "Taplejung District", sub: "", fee: "NPR 2,700 (US $20)/person/week (first 4 weeks)\nNPR 3,375 (US $25)/person/week (beyond 4 weeks)" },
    { sn: 3, area: "Kanchanjunga Region", sub: "Langchunggola, Lelep, Papung & Yamphudin", fee: "NPR 1,350 (US $10)/person/week" },
    { sn: 4, area: "Upper Mustang", sub: "", fee: "NPR 67,500 (US $500)/person for first 10 days; NPR 6,750 (US $50)/person/day thereafter" },
    { sn: 5, area: "Gorkha District", sub: "a. Manaslu\nb. Tsum Valley (Sirdibas–Chumling–Nile–Chhule)", fee: "Manaslu — Sep–Nov: NPR 13,500 (US $100)/week, NPR 2,025 (US $15)/day beyond 7 days. Dec–Aug: NPR 10,125 (US $75)/week, NPR 945 (US $7)/day beyond 7 days.\nTsum Valley — Sep–Nov: NPR 5,400 (US $40)/week, NPR 945 (US $7)/day beyond 1 week. Dec–Aug: NPR 4,050 (US $30)/week, NPR 945 (US $7)/day beyond 1 week." },
    { sn: 6, area: "Gaurishankar & Lamabagar", sub: "Dolakha District", fee: "NPR 2,700 (US $20)/person/week" },
    { sn: 7, area: "Simikot & Yari", sub: "Humla District (Limi, Muchu, Tangekhola areas)", fee: "NPR 6,750 (US $50)/person for first 7 days; NPR 1,350 (US $10)/person/day thereafter" },
    { sn: 8, area: "Thuman & Timure", sub: "Rasuwa District", fee: "NPR 1,350 (US $10)/person/week" },
    { sn: 9, area: "Makalu Region", sub: "Sankhuwasabha District (Kimathanka, Chepuwa, Hatiya, Pawakhola)", fee: "NPR 2,700 (US $20)/person/week for first 4 weeks; NPR 3,375 (US $25)/person/week thereafter" },
    { sn: 10, area: "Everest Region", sub: "Solukhumbu District (Thame to Nangpala)", fee: "NPR 2,700 (US $20)/person/week for first 4 weeks; NPR 3,375 (US $25)/person/week thereafter" },
    { sn: 11, area: "Manang District", sub: "Nar, Phu & northern Tilicho VDC", fee: "Sep–Nov: NPR 13,500 (US $100)/week, NPR 2,025 (US $15)/day beyond 1 week.\nDec–Aug: NPR 10,125 (US $75)/week, NPR 2,025 (US $15)/day beyond 1 week." },
    { sn: 12, area: "Mugu District", sub: "Mugu, Dolpu, Pulu & Bhangri", fee: "NPR 13,500 (US $100)/person/week; NPR 2,025 (US $15)/person/day beyond 1 week" },
    { sn: 13, area: "Bajhang District", sub: "Kanda, Saipla & Dhuli areas", fee: "NPR 12,150 (US $90)/person/week (first week); NPR 2,025 (US $15)/person/day beyond 1 week" },
    { sn: 14, area: "Darchula District", sub: "Byas VDC area", fee: "NPR 12,150 (US $90)/person/week; NPR 2,025 (US $15)/person/day beyond 1 week" },
  ]

  return (
    <>
      <div className="text-center pt-24">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <h1 className="text-4xl md:text-5xl text-red-900 font-light tracking-wide">Trekking</h1>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800">Permit</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-red-100">
          <table className="w-full text-sm text-left">
            <thead className="bg-red-900 text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-3 w-10">S.N.</th>
                <th className="px-4 py-3">Trekking Area</th>
                <th className="px-4 py-3">Permit Fee (NPR / USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-50">
              {permits.map((p, i) => (
                <tr key={p.sn} className={`hover:bg-red-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-red-50/40'}`}>
                  <td className="px-4 py-4 text-red-300 font-medium">{p.sn}</td>
                  <td className="px-4 py-4">
                    <p className="font-semibold text-red-900">{p.area}</p>
                    {p.sub && <p className="text-gray-400 text-xs mt-1 whitespace-pre-line">{p.sub}</p>}
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-pre-line">{p.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Entrance Fees */}
        <div className="mt-8 bg-red-50 rounded-2xl p-6 border border-red-100">
          <h2 className="text-sm font-semibold text-red-900 uppercase tracking-wider mb-4">Entrance Fees</h2>
          <div className="divide-y divide-red-100">
            <div className="flex justify-between py-3 text-sm">
              <div>
                <p className="text-gray-800">Annapurna Conservation Area entry fee</p>
                <p className="text-gray-400 text-xs">SAARC countries: NRs. 1,000</p>
              </div>
              <p className="font-semibold text-red-900">NRs. 3,000</p>
            </div>
            <div className="flex justify-between py-3 text-sm">
              <div>
                <p className="text-gray-800">TIMS Fee</p>
                <p className="text-gray-600 text-xs">SAARC countries: NRs. 300</p>
              </div>
              <p className="font-semibold text-red-900">NRs. 1,350 (US $10)</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-4 text-center">* Converted at approximately 1 USD = NPR 135. Rates may vary.</p>
      </div>
      <Footer/>
    </>
  )
}

export default TrekkingPermit