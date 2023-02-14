import React from "react";
import { Button, Col, Row } from "antd";
import { FormattedMessage } from "react-intl";


const BoxedContent = () => (


  <Row className="boxed-content-container" align="center">
    <Col className="content" xs={24} sm={14}>
      <h1 className="bc-title"><FormattedMessage id="label.customFinTechSolution" /></h1>
      <p><FormattedMessage id="label.customFintechDescription" /></p>
    </Col>
    <Col xs={24} sm={10} className="btn-container">
      <Button type="primary outlined"><FormattedMessage id="button.send" /></Button>
    </Col>
  </Row>

);


export default BoxedContent;