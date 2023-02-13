import React from "react";
/* import Image from "next/image"; */

import Tick from "@/assets/images/tick.svg";

const UserCard = ({ title, description, transparent, img }) => (

  <div className={`usercard-container ${transparent ? "transparent": ""}`}>
    {img}
    <div className="flex flex-column">
      <h1>{title}</h1>
      <div className="description">
        <Tick />
        <p>{description}</p>
      </div>
    </div>
  </div>
);
export default UserCard;