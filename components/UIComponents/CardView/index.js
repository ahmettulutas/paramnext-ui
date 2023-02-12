import React from "react";
import PropTypes from "prop-types";
import { cardViewTypes } from "@/lib/constants";
import { classNames, getLocalizedText } from "@/lib/helpers";
import CardViewExtended from "./CardView.Extended";
import CardViewHorizontal from "./CardView.Horizontal";
import CardViewSingle from "./CardView.Single";
import PreCardView from "./PreCardView";
import { Col, Row } from "antd";

const CardView = ({ type, withPre, className, preOptions }) => {
  const View = props => {
    switch (type) {
      case cardViewTypes.extended:
        return <CardViewExtended {...props} />;
      case cardViewTypes.horizontal:
        return <CardViewHorizontal {...props} />;
      case cardViewTypes.single:
        return <CardViewSingle {...props} />;
      default:
        return null;
    }
  };

  return (
    <section className={classNames(["card-view", type, className])}>
      <Row>
        { withPre &&
          <Col xs={24}>
            <PreCardView {...{ ...preOptions, title: getLocalizedText(withPre?.fields?.title), description: getLocalizedText(withPre?.fields?.description) }} />
          </Col>
        }
        <Col xs={24}>
          <View />
        </Col>
      </Row>

    </section>
  );
};

CardView.propTypes = {
  type: PropTypes.oneOf(Object.keys(cardViewTypes)).isRequired,
  withPre: PropTypes.object,
  className: PropTypes.string,
  preOptions: PropTypes.object
};

CardView.defaultProps = {
  withPre: undefined,
  preOptions: { marginTop: 208, marginBottom: 152 }
};

export default CardView;