import React, { useState } from "react";
import Title from "../../Components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const DashBoard = () => {
  const [dashbordData, setDashbordData] = useState(dashboardDummyData);

  return (
    <>
      <div>
        <Title
          align="left"
          font="outfit"
          title="Dashboard"
          subtitle="Monitor your room listings, track bookings and analyze revenue-all in one place. stay updated with real-time insights to ensure smooth opertions."
        />
        <div className="flex gap-4 my-8">
          {/* total booking  */}
          <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
            <img
              src={assets.totalBookingIcon}
              alt="totalbooking"
              className="max-sm:hidden h-10"
            />
            <div className="flex flex-col sm:ml-4 font-medium">
              <p className="text-blue-500 text-lg">Total Booking</p>
              <p className="text-neutral-400 text-base">
                {dashbordData.totalBookings}
              </p>
            </div>
          </div>
          {/* total revenue  */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
