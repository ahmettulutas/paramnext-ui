import React from "react";
import { FormattedMessage } from "react-intl";
import HeroCarousel from "./HeroCarousel";
const SliderContainer = () => (
  <section>
    <div className="slider-section">
      <p><FormattedMessage id="label.sectors" /></p>
      <h2><FormattedMessage id="label.everythingYouNeed" /></h2>
      <h5><FormattedMessage id="label.nothingYouNoNeed" /></h5>
    </div>
    <HeroCarousel />
  </section>
);
export default SliderContainer;
