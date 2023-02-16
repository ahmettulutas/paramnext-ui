import QuickHelpForm from "@/components/UIComponents/QuickHelpForm";
import React from "react";
import HaveProjectSvg from "@/assets/images/have-project.svg";
import { FormattedMessage } from "react-intl";
import { Col, Row } from "antd";

export const HaveProject = () => (
  <section>
    <Row className="have-project-container">
      <div className="title">
        <h1><FormattedMessage id="label.contact" /></h1>
        <h2><FormattedMessage id="label.haveAProject1" /></h2>
        <p><FormattedMessage id="label.contactUs2" /></p>
      </div>
      <Col xs={24} sm={20} md={18} lg={16} className="m-auto">
        <QuickHelpForm />
      </Col>
      <div className="svg-container">
        <HaveProjectSvg />
      </div>
    </Row>
  </section>
);
