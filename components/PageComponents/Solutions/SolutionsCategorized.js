import React, { useState } from "react";
import { TagSelector } from "@/components/UIComponents";
import SolutionItem from "./SolutionItem";

import solutionNames from "@/data/solutions.names.json";
import { Col, Row } from "antd";
import { getLocalizedText, getLocalizedImage } from "@/lib/helpers";
/* import withData from "../../WithData"; */
import AnimateSection from "@/components/UIComponents/AnimationSection";

const SolutionsCategorized = ({ solutions }) => {


  const [selectedCategory, setSelectedCategory] = useState("cardProcessing"),

    filteredItems = solutions.filter(item => item.fields.category?.["en-US"].includes(selectedCategory));
  return (
    <div className="solutions-categorized">
      <TagSelector items={solutionNames} onChange={setSelectedCategory} />
      <Row gutter={[50, 20]} className="solution-items">
        {
          filteredItems.map(({ fields, sys }, index) => {
            const
              title = getLocalizedText(fields.title),
              description = getLocalizedText(fields.description),
              localeImage = getLocalizedImage(fields.logo);

            return (
              <Col xs={24} sm={12} md={8} lg={6} key={sys.id}>
                <AnimateSection animationSlide="slideUp" delay={800 + (index * 200)} once={false} translate={index * 30}>
                  <SolutionItem {...{ title, description, localeImage }} />
                </AnimateSection>
              </Col>
            );
          }
          )
        }
      </Row>
    </div>
  );
};
export default SolutionsCategorized;
/* export default withData(SolutionsCategorized, "solutions"); */