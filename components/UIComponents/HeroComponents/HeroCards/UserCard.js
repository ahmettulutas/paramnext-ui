import React from "react";
import TextWithTick from "../../TextWithTick";

const UserCard = ({ title, description, transparent, img }) => (

  <div className={`usercard-container ${transparent ? "transparent" : ""}`}>
    {img}
    <div className="flex flex-column">
      <p className="big text-500 lh-big white-text">{title}</p>
      <TextWithTick isUserCard description={description} />
    </div>
  </div >
);
export default UserCard;