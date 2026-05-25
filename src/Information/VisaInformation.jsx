import React from "react";
import Footer from "../Components/Home/Footer";

const VisaInformation = () => {
  return (
    <>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <h1 className="text-4xl md:text-5xl text-red-900 font-light tracking-wide">
              Visa
            </h1>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
              Information
            </h1>
          </div>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Important visa details, entry requirements, visa fees, and
            immigration information for travelers visiting Nepal.
          </p>
        </div>

        {/* Main Container */}
        <div className="max-w-5xl mx-auto grid gap-8">

          {/* Intro */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Visa on Arrival
            </h2>
            <p className="text-gray-700 leading-8 text-sm sm:text-base">
              A visa for Nepal can be obtained on arrival at the Tribhuvan
              International Airport, Kathmandu and at border entry points in
              Kakadvitta, Birgunj, Bhairahawa, Nepalgunj, Gaddachowki on the
              Nepal–India border and Kodari on the Nepal–China border.
            </p>
            <p className="text-gray-700 leading-8 mt-4 text-sm sm:text-base">
              Outside of Nepal, visas can also be obtained at the nearest Nepal
              Embassy or Diplomatic Mission. To renew a visa, travelers can visit
              the Department of Immigration, Kalikasthan, Kathmandu.
            </p>
          </div>

          {/* Visa Requirements */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Visa Requirements
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-7">
              <li>• A valid passport and one passport-size photo with a light background are required.</li>
              <li>• Visa fees can be paid only in convertible currencies such as Euro, Swiss Franc, Pound Sterling, US Dollar, Australian Dollar, Canadian Dollar, Hong Kong Dollar, Singapore Dollar, and Japanese Yen.</li>
              <li>• Credit cards, Indian currency, and Nepalese currency are not accepted for visa payment.</li>
            </ul>
          </div>

          {/* Tourist Visa Table */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-red-900 mb-6">
              Tourist Visa Nepal
            </h2>
            <table className="w-full text-sm text-left min-w-[500px]">
              <thead className="bg-red-900 text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">Visa Facility</th>
                  <th className="px-4 py-3">Duration</th>
                  <th className="px-4 py-3">Fee (NPR / USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-50">
                <tr className="bg-white hover:bg-red-50 transition-colors">
                  <td className="px-4 py-4 text-gray-700">Multiple Entry</td>
                  <td className="px-4 py-4 text-gray-700">15 Days</td>
                  <td className="px-4 py-4 font-semibold text-red-900">NPR 4,050 (US $30)</td>
                </tr>
                <tr className="bg-red-50/40 hover:bg-red-50 transition-colors">
                  <td className="px-4 py-4 text-gray-700">Multiple Entry</td>
                  <td className="px-4 py-4 text-gray-700">30 Days</td>
                  <td className="px-4 py-4 font-semibold text-red-900">NPR 6,750 (US $50)</td>
                </tr>
                <tr className="bg-white hover:bg-red-50 transition-colors">
                  <td className="px-4 py-4 text-gray-700">Multiple Entry</td>
                  <td className="px-4 py-4 text-gray-700">90 Days</td>
                  <td className="px-4 py-4 font-semibold text-red-900">NPR 16,875 (US $125)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Gratis Visa */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Gratis (Free) Visa
            </h2>
            <p className="text-gray-700 leading-8 text-sm sm:text-base">
              For the first visit in one visa year (January to December), a free
              30-day visa is available for nationals of South Asian countries such
              as Bangladesh, Bhutan, Maldives, Pakistan, and Sri Lanka.
            </p>
            <p className="text-gray-700 leading-8 mt-4 text-sm sm:text-base">
              Indian nationals do not require a visa to enter Nepal.
            </p>
          </div>

          {/* Indian Nationals */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Nepal Visa for Indian Nationals
            </h2>
            <p className="text-gray-700 mb-5 leading-7">
              Indian nationals do not require a visa to enter Nepal. Travelers
              must carry any one of the following documents:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
              {[
                "1. Passport",
                "2. Driving License with Photo",
                "3. Government-issued Photo ID",
                "4. Ration Card with Photo",
                "5. Election Commission Card",
                "6. Embassy of India ID Card",
              ].map((item) => (
                <div key={item} className="bg-red-50 border border-red-100 p-4 rounded-xl text-gray-700">
                  {item}
                </div>
              ))}
              <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-gray-700 sm:col-span-2">
                7. ID Card issued by Sub-divisional Magistrate or higher-ranking officials
              </div>
            </div>
          </div>

          {/* Chinese Nationals */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Nepal Visa for Chinese Nationals
            </h2>
            <p className="text-gray-700 leading-8 text-sm sm:text-base">
              Chinese nationals applying for tourist visas to Nepal are provided
              gratis tourist visas from Nepali missions in:
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-4 text-gray-700">
              {[
                "Embassy of Nepal, Beijing",
                "Consulate General of Nepal, Lhasa",
                "Consulate General of Nepal, Hong Kong",
                "Honorary Consulate of Nepal, Shanghai",
              ].map((item) => (
                <li key={item} className="bg-red-50 border border-red-100 p-4 rounded-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Visa */}
          <div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-5">
              Other Visa Information
            </h2>
            <p className="text-gray-700 leading-8 text-sm sm:text-base">
              Nationals from Nigeria, Ghana, Zimbabwe, Swaziland, Cameroon,
              Somalia, Liberia, Ethiopia, Iraq, Palestine, and Afghanistan must
              obtain visas from Nepal Embassies or Diplomatic Missions in their
              respective countries before traveling to Nepal.
            </p>
          </div>

         {/* Visa Extension */}
<div className="rounded-2xl shadow-sm p-6 sm:p-8 border border-red-100">
  <h2 className="text-2xl font-semibold text-red-900 mb-4">
    Visa Extension for Nepal
  </h2>
  <p className="text-gray-700 leading-8 text-sm sm:text-base">
    Tourists can stay in Nepal for a maximum of 150 days within a visa
    year (January 1 to December 31).
  </p>
</div>

          <p className="text-xs text-gray-600 mt-2 text-center">
            * Converted at approximately 1 USD = NPR 135. Rates may vary.
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisaInformation;