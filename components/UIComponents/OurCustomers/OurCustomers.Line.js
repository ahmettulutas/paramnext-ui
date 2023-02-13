import React from "react";
import Marquee from "react-fast-marquee";

const OurCustomersLine = ({ fallbackData }) => (
  <div>
    <h1>Partnerlerimiz</h1>
    <Marquee pauseOnHover gradient={false} speed={40}>
      <div className="our-customers__wrapper">

        {
          fallbackData.map(customer => (
            <img key={customer.name} alt={customer.name} src={customer.imagePath} />
          ))
        }
      </div>
    </Marquee>
  </div>
);

export default OurCustomersLine;