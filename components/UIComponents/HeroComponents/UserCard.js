import React from "react";
/* import Image from "next/image"; */
import Profile1 from "@/assets/images/Profile1.svg";
import Tick from "@/assets/images/tick.svg";

const UserCard = () => (

  <div className="usercard-container">
    <Profile1 />
    <div className="flex flex-column">
      <h1>Sena Durusoy</h1>
      <div className="flex">
        <Tick />
        <p>Ödeme Talebi</p>
        <p>Ödeme Talebi</p>
      </div>
    </div>
  </div>
);
export default UserCard;