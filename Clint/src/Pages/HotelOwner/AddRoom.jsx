import React, { useState } from "react";
import Title from "../../Components/Title";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [imputs, setInputs] = useState({
    roomType: "",
    pricePerNigt: 0,
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <div>
      <form action="">
        <Title align="left" font="ooutfit" title="Add Room" subtitle="" />
      </form>
    </div>
  );
};

export default AddRoom;
