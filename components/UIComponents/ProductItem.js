import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import GlobeIcon from "../../assets/images/product-globe.svg";
import { ReactSVG } from "react-svg";

const ProductItem = ({ title, description, localeImage }) => (
  <div className="product-item">
    <div className="auto-col">
      { localeImage ? <ReactSVG className="icon-bg" src={`https:${localeImage.fields.file.url}`} /> : <div className="icon-bg"><GlobeIcon /></div>}
    </div>
    <div className="auto-col">
      <Typography.Title level={4}>
        {title}
      </Typography.Title>
      <p>
        {description}
      </p>
    </div>
  </div>
);
ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ProductItem;