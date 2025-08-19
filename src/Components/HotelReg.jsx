import React from "react";
import { assets, cities } from "../assets/assets";

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
          {/* hotel name  */}

          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* phone  */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Phone
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* address   */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* drop down city */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              name="city"
              id="city"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-700  text-white mr-auto py-2 transition-all ease-in-out
          rounded cursor-pointer mt-6 px-6"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
