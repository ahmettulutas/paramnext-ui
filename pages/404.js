import React from "react";
/* import { ReactSVG } from "react-svg"; */
import Error from "@/assets/images/404.svg";
import { Hero } from "@/components/UIComponents";
import { Button, Col, Row, Typography } from "antd";
import TranslatedLink from "@/components/UIKit/TranslatedLink";
import { FormattedMessage } from "react-intl";

const ErrorPage = () => (
  <Hero>
    <Row className="container-responsive-centered mobile" gutter={[0, 50]}>
      <Col xs={{ span: 22, order: 2 }} md={10}>
        <Row gutter={[30, 30]} className="mt-32" justify="center">
          <Col>
            <Typography.Title level={1} className="text-center">
              <FormattedMessage id="message.pageDoesntExist" />
            </Typography.Title>
          </Col>
          <Col>
            <TranslatedLink href="/">
              <a>
                <Button className="secondary">
                  <FormattedMessage id="button.goBackHome" />
                </Button>
              </a>
            </TranslatedLink></Col>
        </Row>
      </Col>
      <Col xs={{ span: 22, order: 1 }} md={14}><Error /></Col>
    </Row>
  </Hero>

);
export default ErrorPage;