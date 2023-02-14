import React from "react";
import { FormattedMessage } from "react-intl";
import HeroCarousel from "./HeroCarousel";
const SliderContainer = () => (
  <section>
    <div className="header-section">
      <p><FormattedMessage id="label.sectors" /></p>
      <p><FormattedMessage id="label.everythingYouNeed" /></p>
      <p><FormattedMessage id="label.nothingYouNoNeed" /></p>
    </div>
    <HeroCarousel />
  </section>
);
export default SliderContainer;
