import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import RightIcon from "../../assets/images/right-icon.svg";
import PropTypes from "prop-types";
/* import { Image } from "../UIKit"; */

const ProductSummary = ({ title, description, image }) => (
  <div className="product-summary">
    {
      image ?
        <div className="mb-48">{image}</div>
        : undefined
    }

    <Typography.Title level={3}>
      {title}
    </Typography.Title>

    <p>
      {description}
    </p>

    <Row>
      <Col xs={12}>
        <Button type="primary" className="with-icon">
          <FormattedMessage id="button.getOffer" />
          <RightIcon />
        </Button>
      </Col>
    </Row>
  </div>
);

ProductSummary.propTypes = {
  product: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default ProductSummary;