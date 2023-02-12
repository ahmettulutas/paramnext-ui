import React from "react";
import { Row, Col, Typography } from "antd";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import { getLocalizedImage, getLocalizedText } from "@/lib/helpers";

const OurCustomersGrid = ({ data, fallbackData }) => (
  <div className="our-customers__wrapper">

    <Typography.Title level={5} className="uppercase">
      <FormattedMessage id="label.ourCustomers" />
    </Typography.Title>

    <Typography.Title level={3} className="m-0">
      <FormattedMessage id="label.ourCustomersTitle1" />
    </Typography.Title>

    <Typography.Title level={3} className="m-0">
      <FormattedMessage id="label.ourCustomersTitle2" />
    </Typography.Title>

    <div className="customer-grid">
      <Row gutter={[{ xs: 0, sm: 24 }, { xs: 0, sm: 24 }]}>
        {
          data
            ? data.map(customer => {
              const { alt, image } = customer.fields,
                localeImage = getLocalizedImage(image),
                { file } = localeImage.fields,
                { width, height } = file.details.image;
              return (
                <Col key={localeImage.sys.id} xs={24} sm={8} style={{ position: "relative" }}>
                  <Image alt={getLocalizedText(alt)} src={`https:${file.url}`} {...{ width, height }} objectFit="contain"/>
                </Col>
              );
            })
            :
            fallbackData.map(customer => (
              <img key={customer.name} alt={customer.name} src={customer.imagePath} />
            ))
        }
      </Row>
    </div>

  </div>
);

export default OurCustomersGrid;