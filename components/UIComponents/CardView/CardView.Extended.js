import React from "react";
import { FormattedMessage } from "react-intl";
import { Row, Col } from "antd";
import CardsExtendedSVG from "../../../assets/images/cards.extended.svg";
import RightIcon from "../../../assets/images/right-icon.svg";
import OurCustomers from "../OurCustomers";
import { ourCustomersTypes } from "@/lib/constants";


const CardViewExtended = () => (
  <div className="extended">
    <div className="extended-cards__inner">
      <div className="extended-cards__content">
        <CardsExtendedSVG />
      </div>
    </div>
    <div className="extended-cards__footer">
      <div>
        <p>
          <FormattedMessage id="label.trustedUs" />
          <span className="ml-16">
            <RightIcon />
          </span>
        </p>
        <Row>
          <Col xs={12} className="mt-24">
            <OurCustomers type={ourCustomersTypes.line} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default CardViewExtended;