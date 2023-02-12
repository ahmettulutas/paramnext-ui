import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { getLocalizedImage, getLocalizedText } from "@/lib/helpers";

const OurCustomersLine = ({ data, fallbackData }) => (
  <Marquee pauseOnHover gradient={false} speed={40}>
    <div className="our-customers__wrapper">
      { data ?
        data.map(customer => {
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
);

export default OurCustomersLine;