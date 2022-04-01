import React from "react";
import Image from "next/image";
import Logo from "../../../public/AFRIK TV logo.png";

const Header = () => {
  return (
    <header className="bg-red-300">
      <div className="logo">

        <img src={Logo} alt="AFRIK TV logo" />
      </div>

      <nav>
        <ol className="flex font-semibold">
          <li className="text-[22px]">About</li>

          <li className="text-[22px]">Features</li>

          <li className="text-[22px]">FAQ</li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
