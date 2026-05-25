import React from "react";
import Footer from "../Home/Footer";

const NepalTrekTeam = () => {
  const team = [
    {
      img: "https://miteritreks.com/uploads/members/04753b271bd2ad58777f427dc0ab3c08.jpg",
      name: "Andrea Jozef Heuten",
      role: "Advisor",
    },

    {
      img: "https://miteritreks.com/uploads/members/ebc42ce5faa4cc460d7b24070b52628f.jpg",
      name: " Jörn Materne International Guest Relation  ",
      role: "Co-Advisor",
    },

    {
      img: "https://miteritreks.com/uploads/members/8c333f0e0428ba3be0813de39b67ae09.jpg",
      name: "Kisham Kumari Gurung",
      role: "Managing Director",
    },

    {
      img: "https://miteritreks.com/uploads/members/335203dfe5379c71ef30ba7b50535677.jpg",
      name: "Anand Jung Gurung",
      role: "Executive Director",
    },

    {
      img: "https://miteritreks.com/uploads/members/2f2d65b96f24be32b6f94c5a87ff58a1.JPG",
      name: "Man Bahadur Gurung (Man Singh)",
      role: "Partner",
    },

    {
      img: "https://miteritreks.com/uploads/members/79f660ba66eb53a6f6d3201662e93936.jpg",
      name: "Nanda Prasad Gurung (Maila)",
      role: "Guide",
    },

    {
      img: "https://miteritreks.com/uploads/members/b80c0948858683af35546a320ab125b9.JPG",
      name: "Lal Bahadur Tamang",
      role: "Guide",
    },

    {
      img: "https://miteritreks.com/uploads/members/7ab43af3dea31f73bab83955694e0d8a.jpeg",
      name: "Sahadev Mahato",
      role: "Guide",
    },
     {
      img: "",
      name: "Anil Gurung",
      role: "Guide",
    },
    {
      img: "",
      name: "Doma Sherpa",
      role: "Guide",
    },

     {
      img: "",
      name: "Rabindra Gurung",
      role: "Guide",
    },
  ];

  return (
    <>
      <div className="pt-24 px-6 ">
        <div className="flex justify-center items-center gap-3 mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-red-900">
            OUR
          </h1>

          <h1 className=" sm:text-4xl md:text-4xl font-serif text-gray-800">
            TEAM
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover rounded-2xl hover:scale-105 duration-120 shadow-2xl "
              />

              <h2 className="mt-3 text-gray-800 font-semibold">
                {member.name}
              </h2>

              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NepalTrekTeam;
