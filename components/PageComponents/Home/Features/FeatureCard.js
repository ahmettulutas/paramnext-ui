import React from "react";
import { FormattedMessage } from "react-intl";

const FeatureCard = ({ item }) => {
  const { title, description, image, customStyle, overflow } = item;
  return (
    <div className="feature-card" style={{ overflow }}>
      <h4><FormattedMessage id={title} /></h4>
      <p className="black-text lh-big"><FormattedMessage id={description} /></p>
      <div className="svg-container" style={customStyle}>
        {image}
      </div>
    </div>
  );
};
export default FeatureCard;
