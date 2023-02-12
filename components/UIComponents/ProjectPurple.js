import React from "react";
import { Row, Col, Typography } from "antd";
import QuickHelpForm from "@/components/UIComponents/QuickHelpForm";
import AnimateSection from "./AnimationSection";

const ProjectPurple = ({ title }) => (
  <div className="project-purple">
    <div>
      <Row gutter={60} className="text-row container-responsive-centered tablet" justify="space-between">
        <Col xs={24} sm={18} md={13} lg={11} className="text">
          <AnimateSection animationSlide="slideRight" delay={900} translate={20}>
            <Typography.Title level={3}>
              {title}
            </Typography.Title>
          </AnimateSection>
        </Col>

        <Col xs={24} sm={20} md={11} lg={10} xl={8}>
          <AnimateSection animationSlide="slideRight" delay={900} translate={20}>
            <QuickHelpForm />
          </AnimateSection>
        </Col>
      </Row>
    </div>
  </div>
);

export default ProjectPurple;