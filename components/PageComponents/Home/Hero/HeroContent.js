import { Col, Row } from "antd";
import React from "react";
import { Button } from "@/components/UIKit";
import { FormattedMessage } from "react-intl";
import AnimateSection from "@/components/UIComponents/AnimationSection";
import TranslatedLink from "@/components/UIKit/TranslatedLink";
import HeroCardContainer from "@/components/UIComponents/HeroComponents/HeroCards/HeroCardContainer";
import { ourCustomersTypes } from "@/lib/constants";
import { OurCustomers } from "@/components/UIComponents";
import SliderContainer from "@/components/UIComponents/HeroComponents/HeroSlider/SliderContainer";


const HeroContent = () => (
  <section className="content">
    <Row className="container-responsive-centered tablet" gutter={[50, 50]}>
      <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }} xl={{ span: 13, order: 1 }} className="offer">
        <AnimateSection animationSlide={"slideRight"} delay={1200}>
          <div className="title-section">
            <h1 className="white-text"><FormattedMessage id="label.homeHeader" /></h1>
            <p className="mb-80 lh-big">
              <FormattedMessage id="label.homeSubtitle" />
            </p>
            <TranslatedLink href="/contact-us">
              <a>
                <Button type="primary" className="white">
                  <FormattedMessage id="button.getOffer" />
                </Button>
              </a>
            </TranslatedLink>
          </div>
        </AnimateSection>
      </Col>
      <Col xs={{ span: 22, order: 1 }} lg={{ span: 12, order: 2 }} xl={{ span: 11, order: 2 }} className="paramnext-card">
        <AnimateSection animationSlide={"slideLeft"} delay={1200}>
          <HeroCardContainer />
        </AnimateSection>
      </Col>
      <Col xs={{ span: 24, order: 3 }}>
        <OurCustomers type={ourCustomersTypes.line} />
      </Col>
      <Col xs={{ span: 24, order: 3 }} className="slider-container">
        <SliderContainer />
      </Col>
    </Row>
  </section>
);

export default HeroContent;