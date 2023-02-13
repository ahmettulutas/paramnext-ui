import React from "react";
import { classNames } from "@/lib/helpers";
import PropTypes from "prop-types";
import { heroTypes } from "@/lib/constants";
import { FormattedMessage } from "react-intl";
import { Col, Row } from "antd";
import { Button } from "../UIKit";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";

import AnimateSection from "./AnimationSection";
import TranslatedLink from "../UIKit/TranslatedLink";
import HeroLines from "./HeroLines";

const Hero = ({ children, className, type, image, svg: SVG, title, subTitle, description, upTitle }) => {
  const
    { locale } = useRouter();
  return (
    <div
      className={classNames([
        "hero",
        className,
        type
      ])}>

      {
        type === heroTypes.lines &&
        /*         <div className="hero-bg">
          <img src="/images/grain.svg" alt="hero-grain-background"/>
        </div> */
        <HeroLines />
      }

      <div className="hero-wrapper">
        {
          children
          ||
        <div className="hero-content">
          <Row gutter={[50, 70]} className="bring-to-front">
            <Col xs={{ span: 22, order: 2 }} lg={{ span: 9, order: 1 }} className="hero-cols">
              <AnimateSection animationSlide={"slideRight"} delay={900}>
                {
                  upTitle ?
                    <h5>{upTitle}</h5>
                    : null
                }
                {
                  title ?
                    <h1>{title}</h1>
                    : null
                }
                {
                  subTitle ?
                    <h1>{subTitle}</h1>
                    : null
                }
                {
                  description ?
                    <p>{description}</p>
                    : null
                }
                <TranslatedLink href="/contact-us">
                  <a>
                    <Button className="secondary">
                      <FormattedMessage id="button.getOffer" />
                    </Button>
                  </a>
                </TranslatedLink>
              </AnimateSection>
            </Col>

            <Col className="hero-image" xs={{ span: 22, order: 1 }} lg={{ span: 15, order: 2 }}>
              <AnimateSection animationSlide={"slideLeft"} delay={900}>
                { image ? <ReactSVG src={image} /> : undefined}
                { SVG ? <div className={classNames(["svg", locale])}><ReactSVG src={SVG} /></div> : undefined}
              </AnimateSection>
            </Col>
          </Row>


        </div>
        }
      </div>
    </div >
  );
};

Hero.propTypes = {
  type: PropTypes.oneOf(Object.keys(heroTypes)).isRequired,
  className: PropTypes.string,
  upTitleId: PropTypes.string,
  titleId: PropTypes.string,
  descriptionId: PropTypes.string,
  image: PropTypes.string,
  svg: PropTypes.string,
  children: PropTypes.node
};

Hero.defaultProps = {
  type: heroTypes.gradient
};

export default Hero;