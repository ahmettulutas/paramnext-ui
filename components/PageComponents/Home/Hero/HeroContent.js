import { Col, Row } from "antd";
import React from "react";
import { Button } from "@/components/UIKit";
/* import ParamTextCard from "@/assets/images/paramtech-card.svg"; */
import { FormattedMessage } from "react-intl";
import { getLocalizedText } from "@/lib/helpers";
import HomeParamTechCard from "@/assets/images/home-paramcard.png";
import Image from "next/image";
import AnimateSection from "@/components/UIComponents/AnimationSection";
import TranslatedLink from "@/components/UIKit/TranslatedLink";

const HeroContent = ({ heroDescription, heroTitle }) => (
  <section className="content">
    <Row className="container-responsive-centered" gutter={[50, 50]}>
      <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }} xl={{ span: 15, order: 1 }} className="offer">
        <AnimateSection animationSlide={"slideRight"} delay={1200}>
          <h1 className="ant-typography" >{getLocalizedText(heroTitle)}</h1>
          <p className="mb-80">
            {getLocalizedText(heroDescription)}
          </p>
          <TranslatedLink href="/contact-us">
            <a>
              <Button className="secondary">
                <FormattedMessage id="button.getOffer" />
              </Button>
            </a>
          </TranslatedLink>
        </AnimateSection>
      </Col>
      <Col xs={{ span: 14, order: 1 }} lg={{ span: 12, order: 2 }} xl={{ span: 9, order: 2 }} className="paramtech-card">
        {/* <ParamTextCard /> */}
        <AnimateSection animationSlide={"slideLeft"} delay={1200}>
          <Image src={HomeParamTechCard} alt="param-tech-card"/>
        </AnimateSection>
      </Col>
    </Row>
  </section>
);

export default HeroContent;