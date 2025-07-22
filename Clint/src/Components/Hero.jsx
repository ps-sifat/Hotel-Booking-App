import React from "react";
import heroImage from "../assets/heroimage.png";
const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-16 xl:px-32 text-black  bg-no-repeat bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      hello
    </div>
  );
};

export default Hero;
