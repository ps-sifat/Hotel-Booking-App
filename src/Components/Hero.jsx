import React from "react";
// import heroImage from "../assets/heroimage.png";
// import heroImage from "../../src/assets/assets";
import heroImage from "../assets/heroimage.png";


import { assets, cities } from "../assets/assets";
const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-16 xl:px-32 text-white  bg-no-repeat bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div>
        <p className="bg-[#49B9FF]/50 px-4 py-2 rounded-full mt-20 w-[221px] text-sm font-normal">
          The Ultimate Hotel Experience
        </p>
        <h2 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold lg:text-6xl md:font-extrabold lg:w-[610px] mt-4 ">
          Discover Your Perfect Getaway Destination
        </h2>
        <p className="max-w-lg mt-2 text-sm md:text-base ">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>
      </div>
      <div>
        <form className="bg-white text-gray-500  mt-8 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calenderIcon"
                className="h-4"
              />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index}></option>
              ))}
            </datalist>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="calender" className="h-4" />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="calender" className="h-4" />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 hover:b text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
            <img src={assets.searchIcon} alt="searchIcon" className="h-4" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
