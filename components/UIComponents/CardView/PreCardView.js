import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

const PreCardView = ({ marginTop, marginBottom, title, description }) => (
  <div className={`pre-card-view mt-${marginTop} mb-${marginBottom}`}>
    <Row className="container-responsive-centered">
      <Col xs={24} sm={16} md={12} lg={9}>
        <Typography.Title level={3}>
          {title}
        </Typography.Title>

        <p>
          {description}
        </p>

        <Button type="primary" className="button">
          <FormattedMessage id="button.moreInformation" />
        </Button>
      </Col>
    </Row>
  </div>
);

PreCardView.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
};

PreCardView.defaultProps = {
  marginTop: 208,
  marginBottom: 152
};

export default PreCardView;