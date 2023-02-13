import { Col, Row } from "antd";
import React from "react";
import { Button } from "@/components/UIKit";
import { FormattedMessage } from "react-intl";
import AnimateSection from "@/components/UIComponents/AnimationSection";
import TranslatedLink from "@/components/UIKit/TranslatedLink";
import HomeParamTechCard from "@/components/UIComponents/HeroComponents/HomeParamNextCard";

const HeroContent = () => (
  <section className="content">
    <Row className="container-responsive-centered" gutter={[50, 50]}>
      <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }} xl={{ span: 15, order: 1 }} className="offer">
        <AnimateSection animationSlide={"slideRight"} delay={1200}>
          <h1 className="ant-typography" ><FormattedMessage id="label.homeHeader" /></h1>
          <p className="mb-80">
            <FormattedMessage id="label.homeSubtitle" />
          </p>
          <TranslatedLink href="/contact-us">
            <a>
              <Button type="primary" className="white">
                <FormattedMessage id="button.getOffer" />
              </Button>
            </a>
          </TranslatedLink>
        </AnimateSection>
      </Col>
      <Col xs={{ span: 16, order: 1 }} lg={{ span: 12, order: 2 }} xl={{ span: 9, order: 2 }} className="paramtech-card">
        <AnimateSection animationSlide={"slideLeft"} delay={1200}>
          <HomeParamTechCard />
        </AnimateSection>
      </Col>
    </Row>
  </section>
);

export default HeroContent;