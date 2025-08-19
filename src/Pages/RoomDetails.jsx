import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../Components/StarRationg";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setmainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setmainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="py-28 md:py-36 px-4 lg:px-16 xl:px-32">
        {/* room details */}
        <div className=" flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.roomType}
            <span className="font-inter text-sm "> {room.hotel.name}</span>
          </h1>
          <p
            className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500
          rounded-full"
          >
            20% OFF
          </p>
        </div>
        {/* room raiting  */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* room Address  */}
        <div>
          <img
            src={assets.locationIcon}
            alt="locationIcon"
            className="flex items-center gap-1 text-gray-500 mt-2"
          />
          <span className="">{room.hotel.address}</span>
        </div>
        {/* room images  */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="mainImage"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image && "outline-3 outline-orange-500"
                  }`}
                  onClick={() => setmainImage(image)}
                  src={image}
                  alt="Room image"
                  key={index}
                />
              ))}
          </div>
        </div>
        {/* room highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before{" "}
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                  key={index}
                >
                  <img
                    className="w-5 h-5"
                    src={facilityIcons[item]}
                    alt="item"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* room price  */}
          <p className="text-2xl font-medium">${room.pricPerNight}/night</p>
        </div>
        {/* checkin checkout form  */}
        <form className="flex flex-col md:flex-row items-start md.items-center justify-between bg-white shadow-[0px_0px_25px_0px_rgba(0,_0,_0,_0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md.items-center gap-4 md:gap-10 text-gray-500">
            <div className="flex flex-col">
              <label className="text-fw-medium" htmlFor="checkInDate">
                Check In
              </label>
              <input
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                type="date"
                id="checkInDate"
                placeholder="Check-In"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 mx:hidden"></div>
            <div className="flex flex-col">
              <label className="text-fw-medium" htmlFor="checkOutDate">
                Check Out
              </label>
              <input
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 mx:hidden"></div>
            <div className="flex flex-col">
              <label className="text-fw-medium" htmlFor="Guests">
                Guests
              </label>
              <input
                className="max-w-20  rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                type="number"
                id="Guests"
                placeholder="0"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>
        {/* common specifications */}
        <div className="mt-24 space-y-4">
          {roomCommonData.map((spce, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={spce.icon}
                alt={`${spce.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spce.title}</p>
                <p className="text-gray-500">{spce.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl border-y border-gray-500 my-15 ">
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
        </div>
        {/* Map  */}
        <section className=" py-10">
          <h2 className="text-xl md:text-2xl font-medium mb-5">
            Location on map
          </h2>

          <div className="w-full h-[649px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.798861313553!2d-118.2498452234848!3d34.05369021847616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b9e4b06fd5%3A0x59e2904fa7c07be4!2sWalt%20Disney%20Concert%20Hall!5e0!3m2!1sen!2sus!4v1622058028412!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="pt-5">
            <p className="text-gray-800 font-medium">
              Los Angeles, California, USA
            </p>
            <p className="text-sm text-gray-500">
              It's like a home away from home.
            </p>
          </div>
        </section>
        {/* Map  */}
        {/* hosted */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
              src={assets.roomRivew}
              alt="Host"
            />
            <div>
              <p className="text-lg md:text-xl">Hosted by {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>
          <button>Contact Now</button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
