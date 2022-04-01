import React from 'react'
import HeroImage from '../../assets/images/heroimage1.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-content">
          AfrikTV the first African movie streaming
        </div>

        <div className="hero-image">
          <Image src={HeroImage} alt="hero image" unoptimized />
        </div>
      </div>
    </section>
  );
}

export default Hero