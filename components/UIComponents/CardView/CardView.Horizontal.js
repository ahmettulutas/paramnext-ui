import React from "react";
import { FormattedMessage } from "react-intl";
import CardsHorizontalSVG from "@/assets/images/cards.horizontal.svg";

const CardViewHorizontal = () => (
  <div className="horizontal">
    <div className="horizontal-cards__inner">
      <CardsHorizontalSVG />
    </div>
    <div className="horizontal-cards__bg">
      <p>
        <FormattedMessage id="label.lowerYourCosts2" />
      </p>

    </div>
  </div>
);

export default CardViewHorizontal;