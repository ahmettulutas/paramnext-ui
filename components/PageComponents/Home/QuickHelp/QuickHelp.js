import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import QuickHelpForm from "@/components/UIComponents/QuickHelpForm";
import { ReactSVG } from "react-svg";
import AnimateSection from "@/components/UIComponents/AnimationSection";

const QuickHelp = ({ title, description }) => (
  <section className="quick-help">
    <div className="quick-help__wrapper">
      <Row gutter={[60, 60]} align="middle" justify="center">
        <Col xs={24} md={20} lg={9} className="tablet-centered-text">
          <AnimateSection animationSlide="slideLeft" delay={1200}>
            <Typography.Title level={3}>
              {title}
            </Typography.Title>
            <p>
              {description}
            </p>
            <Button type="primary">
              <FormattedMessage id="button.moreInformation" />
            </Button>
          </AnimateSection>
        </Col>
        <Col xs={24} md={18} lg={15} xl={12}>
          <AnimateSection animationSlide="slideLeft" delay={1200}>
            <section className="quick-help-form ml-24">
              <div className="form-wrapper">
                <QuickHelpForm rowCount={5}/>
              </div>
              <div className="bg-div">
                <ReactSVG src={"/images/beehive.svg"} />
              </div>
              <div className="text text-center">
                <Typography.Text>
                  {<FormattedMessage id="label.quickHelp" />}
                </Typography.Text>
              </div>
            </section>
          </AnimateSection>
        </Col>

      </Row>
    </div>
  </section>
);

export default QuickHelp;