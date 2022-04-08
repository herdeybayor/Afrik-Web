import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import profileone from "../public/assets/images/profileone.png";
function whoiswatching(props) {
  const availableprofile = [
    {
      name: "Obiabo",
      image: profileone,
    },
    {
      name: "Disu",
      image: profileone,
    },
  ];
  return (
    <div className="text-center py-20 bg-white h-screen">
      <h1 className="font-black text-[25px]  lg:text-[30px]">
        Who is Watching ?
      </h1>

      <div className="availableprofile flex justify-center py-10 space-x-7">
        {availableprofile.map((i) => (
          <div key={i.name} className="">
            <Image src={i.image} alt={i.name} unoptimized />

            <h2 className="font-bold text-[30px]">{i.name}</h2>
          </div>
        ))}
              


              <div className="addprofile">

                  

                  
              </div>
      </div>
    </div>
  );
}

export default whoiswatching;
