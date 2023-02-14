import React from "react";
import TextWithTick from "../../TextWithTick";

const UserCard = ({ title, description, transparent, img }) => (

  <div className={`usercard-container ${transparent ? "transparent" : ""}`}>
    {img}
    <div className="flex flex-column">
      <h1>{title}</h1>
      <TextWithTick isUserCard description={description} />
    </div>
  </div >
);
export default UserCard;