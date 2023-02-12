import React from "react";
import Card from "@/assets/images/card.svg";
import MobilePhone from "@/assets/images/mobilephone.svg";
import Line from "@/assets/images/wavyline.svg";


const CardViewSingle = () => (
  <section className="single-container">
    <div className="mobile">
      <div className="card">
        <Card />
      </div>
      <div className="phone">
        <MobilePhone />
      </div>
    </div>
    <div className="line">
      <Line />
    </div>
  </section>

);

export default CardViewSingle;