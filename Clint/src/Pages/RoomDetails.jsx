import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, roomsDummyData } from "../assets/assets";
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
      </div>
    )
  );
};

export default RoomDetails;
