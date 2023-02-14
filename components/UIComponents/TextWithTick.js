import React from "react";
import Tick from "@/assets/images/outlined-tick.svg";

const TextWithTick = ({ description }) => (
  <div className="text-with-tick">
    <Tick />
    <p>{description}</p>
  </div>
);
export default TextWithTick;
