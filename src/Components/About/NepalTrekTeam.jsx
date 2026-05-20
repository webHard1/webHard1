import React from "react";
import Footer from "../Home/Footer";

const NepalTrekTeam = () => {
  const team = [
    {
      img: "https://nht-api.nepalhikingteam.com/media/attachments/media-23e431fc-1760247602.jpg",
      name: "Ram Bahadur Lama",
      role: "Guide",
    },

    {
      img: "https://www.switchbacktravel.com/sites/default/files/images/articles/Cameras%20for%20Hiking%20and%20Backpacking%20Photo-1.jpg",
      name: "Joes Albert",
      role: "Photographer",
    },

    {
      img: "https://m.thepeninsulaqatar.com/get/maximage/20210727_1627406156-284769.JPG?1635250003",
      name: "David",
      role: "Mountaineer",
    },

    {
      img: "https://www.himalayanglacier.com/wp-content/uploads/2021/05/dancing-at-mera-peak-climbing-1024x671.jpg",
      name: "Raju Lama",
      role: "Planner",
    },

    {
      img: "https://media.nepaltrekkingplanner.com/uploads/package/gallery/new-project---2023-05-02t134027.736-(1).webp",
      name: "Pakash Tamang",
      role: "Planner",
    },

    {
      img: "https://www.thestatesman.com/wp-content/uploads/2019/05/O2-9-1024x683.jpg",
      name: "Tenjing Lama",
      role: "Coordinator",
    },

    {
      img: "https://pbs.twimg.com/media/EsI0i_gVQAAfR7q.jpg",
      name: "Raju Tamang",
      role: "Trek Leader",
    },

    {
      img: "https://asiantreks.com/uploads/socialmedia/mera-peak-summit.png",
      name: "Tim David",
      role: "Travel Expert",
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
