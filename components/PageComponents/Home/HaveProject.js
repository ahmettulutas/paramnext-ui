import QuickHelpForm from "@/components/UIComponents/QuickHelpForm";
import React from "react";
import HaveProjectSvg from "@/assets/images/have-project.svg";
import { FormattedMessage } from "react-intl";
import { Col, Row } from "antd";

export const HaveProject = () => (
  <section className="have-project-container">
    <Row>
      <Col className="title" xs={24}>
        <p><FormattedMessage id="label.contact" /></p>
        <h2><FormattedMessage id="label.haveAProject1" /></h2>
        <h5><FormattedMessage id="label.contactUs2" /></h5>
      </Col>
      <Col xs={22} sm={20} md={18} lg={14} xl={12} className="m-auto">
        <QuickHelpForm />
      </Col>
      <div className="svg-container">
        <HaveProjectSvg />
      </div>
    </Row>
  </section>
);
