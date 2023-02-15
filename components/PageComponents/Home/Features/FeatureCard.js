import React from "react";
import { FormattedMessage } from "react-intl";

const FeatureCard = ({ item }) => {
  const { title, description, image, customStyle, overflow } = item;
  return (
    <div className="feature-card" style={{ overflow }}>
      <h1><FormattedMessage id={title} /></h1>
      <p><FormattedMessage id={description} /></p>
      <div className="svg-container" style={customStyle}>
        {image}
      </div>
    </div>
  );
};
export default FeatureCard;
