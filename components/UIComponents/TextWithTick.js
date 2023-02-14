import React from "react";
import Tick from "@/assets/images/outlined-tick.svg";

const TextWithTick = ({ description }) => (
  <div className="text-with-tick">
    <div className={description ? "description" : ""}>
      <Tick />
      <p>{description}</p>
    </div>
  </div>
);
export default TextWithTick;
