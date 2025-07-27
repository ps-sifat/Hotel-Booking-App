import React, { useState } from "react";
import Title from "../Components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBooking = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:mb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Booking"
        subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        align="left"
      />
      {/* table  */}
      <div className="max-w-6xl mt-8 w-full text-gray-800 ">
        {/* table head  */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-b-gray-300 py-6 first:border-t"
          >
            {/* hotel details  */}
            <div className="flex flex-col md:flex-row">
              <img
                className="min-md:w-44 rounded shadow object-cover"
                src={booking.room.images[0]}
                alt="hotel-image"
              />
              <div
                className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4 
              "
              >
                <p className="font-playfair text-2xl">
                  {booking.hotel.name}
                  <span className="font-inter text-sm pl-2">
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="locationIcon" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guests" />
                  <span>{booking.guests}</span>
                </div>
                <p className="text-base">Total: ${booking.totalPrice}</p>
              </div>
            </div>
            {/* date & time  */}
            <div></div>
            {/* pryment  */}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
