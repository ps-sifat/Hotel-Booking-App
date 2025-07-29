import React from "react";
import { assets } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed inset-0 zIndex_hotReg flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2 w-full overflow-hidden">
        {/* Left Image */}
        <img
          className="w-1/2 object-cover hidden md:block rounded-l-xl"
          src={assets.regImage}
          alt="Hotel Registration"
        />

        {/* Right Form Content */}
        <div className="relative flex flex-col items-center justify-center md:w-1/2 p-8 md:p-10">
          {/* Close Icon */}
          <img
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
            src={assets.closeIcon}
            alt="Close Icon"
          />

          {/* Header Text */}
          <h2 className="text-2xl font-semibold text-center mb-6">
            Register Your Hotel
          </h2>

          {/* Optional: You can add form inputs here */}
          {/* Example:
          <input
            type="text"
            placeholder="Hotel Name"
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Submit
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
