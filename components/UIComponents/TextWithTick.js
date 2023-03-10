import React from "react";
import OutlinedTick from "@/assets/images/outlined-tick.svg";
import Tick from "@/assets/images/tick.svg";

const TextWithTick = ({ description, isUserCard }) => (
  <div className={`text-with-tick ${isUserCard ? "light-blue" : ""}`}>
    {isUserCard ? <Tick /> : <OutlinedTick />}
    <p className="small lh-big text-500">{description}</p>
  </div>
);
export default TextWithTick;
