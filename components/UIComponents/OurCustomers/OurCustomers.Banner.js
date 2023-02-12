import React from "react";
import { FormattedMessage } from "react-intl";
import Marquee from "react-fast-marquee";
import { getLocalizedImage, getLocalizedText } from "@/lib/helpers";
import Image from "next/image";

const OurCustomersBanner = ({ data, fallbackData }) => (
  <div className="our-customers__wrapper">

    <div className="front">
      <Marquee pauseOnHover gradient={false} speed={40} >
        <div className="inner">
          {
            data
              ? data.map(customer => {
                const { alt, image } = customer.fields,
                  localeImage = getLocalizedImage(image),
                  { file } = localeImage.fields,
                  { width, height } = file.details.image;


                return (

                  <Image key={localeImage.sys.id} alt={getLocalizedText(alt)} src={`https:${file.url}`} {...{ width, height }} objectFit="contain" />
                );
              })
              : fallbackData.map(customer => (
                <img key={customer.name} alt={customer.name} src={customer.imagePath} />
              ))
          }
        </div>
      </Marquee>
    </div>

    <div className="back">
      <p><FormattedMessage id="label.lowerYourCosts" /></p>
    </div>

  </div>
);

export default OurCustomersBanner;