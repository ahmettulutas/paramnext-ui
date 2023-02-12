import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { FormattedMessage } from "react-intl";
import TopRightIcon from "../../../../assets/images/top-right-icon.svg";
import Image from "next/image";

const Container = ({ title, subTitle, description }) => (
  <section className="designed-for-developers">
    <div className="designed-for-developers__wrapper">

      <Row className="mobile-centered mobile" justify="space-between">
        <Col xs={22} sm={24} md={12}>
          <Typography.Title level={5} className="uppercase">
            {title}
          </Typography.Title>

          <Typography.Title level={3}>
            {subTitle}
          </Typography.Title>
          <p>
            {description}
          </p>

          <Row className="button mobile-centered" >
            <Col xs={22} sm={12}>
              <a href="https://testapiportal.param.com.tr" target="_blank" rel="noreferrer">
                <Button type="primary" className="with-icon">
                  <FormattedMessage id="button.exploretheDocs" />
                  <TopRightIcon />
                </Button>
              </a>
            </Col>
          </Row>

        </Col>
        <Col xs={22} sm={24} md={11}>
          <Image src={"/images/designedForDevelopers.svg"} width={500} height={500} />
        </Col>
      </Row>

    </div>
  </section>
);

export default Container;