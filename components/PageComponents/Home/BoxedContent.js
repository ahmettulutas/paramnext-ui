import React from "react";
import { Button, Col, Row } from "antd";
import { FormattedMessage } from "react-intl";


const BoxedContent = () => (

  <section className="boxed-content-container">
    <Row align="center">
      <Col className="content" xs={24} sm={14}>
        <h5 className="dark-blue"><FormattedMessage id="label.customFinTechSolution" /></h5>
        <p><FormattedMessage id="label.customFintechDescription" /></p>
      </Col>
      <Col xs={24} sm={10} className="btn-container">
        <Button type="primary outlined"><FormattedMessage id="button.send" /></Button>
      </Col>
    </Row>
  </section>
);


export default BoxedContent;