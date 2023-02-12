import { getLocalizedImage, getLocalizedText } from "@/lib/helpers";
import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import AnimateSection from "./AnimationSection";
import ProductItem from "./ProductItem";
const
  servicesFallback = [
    { title: <FormattedMessage id="label.fraudDetection" />, description: <FormattedMessage id="label.loremIpsum3" /> },
    { title: <FormattedMessage id="label.campaignManagement" />, description: <FormattedMessage id="label.loremIpsum3" /> },
    { title: <FormattedMessage id="label.accountsManagement" />, description: <FormattedMessage id="label.loremIpsum3" /> },
    { title: <FormattedMessage id="label.campaignManagement" />, description: <FormattedMessage id="label.loremIpsum3" /> }
  ],

  Products = ({ services }) => (
    <Row gutter={[50, 20]}>
      { services ?
        services.map(({ fields, sys }, index) => {
          const title = getLocalizedText(fields.title),
            description = getLocalizedText(fields.description),
            localeImage = getLocalizedImage(fields.logo);
          return (
            <Col key={sys.id} xs={24} md={12} lg={24} xl={12}>
              <AnimateSection animationSlide="slideUp" delay={800 + (index * 100)} once={true} translate={index * 30}>
                <ProductItem {...{ title, description, localeImage }} />
              </AnimateSection>
            </Col>
          );
        })

        :
        servicesFallback.map((item, i) => (
          <Col key={item.title + i} xs={24} md={12}>
            <ProductItem {...item} />
          </Col>
        ))
      }
    </Row>
  );


export default Products;
