import React from "react";
import HeroImage from "../../../public/heroimage1.png";

import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="hero-container grid grid-cols-2">
        <div className="hero-content">
          <h1 className="hero-title text-[rgba(7, 9, 44, 1)] font-extrabold text-6xl leading-tight md:leading-none">
            AfrikTV the first African movie streaming
          </h1>
        </div>

        <div className="hero-image">
          <Image src={HeroImage} alt="hero image" unoptimized />
          <Image src={HeroImage} alt="hero image" unoptimized />
        </div>
      </div>
    </section>
  );
};

export default Hero;
