import React from "react";
import SolutionsHead from "./SolutionsHead";
import SolutionsCategorized from "./SolutionsCategorized";
import AnimateSection from "@/components/UIComponents/AnimationSection";


const Solutions = ({ solutions }) => (
  <section className="solutions">
    <div className="solutions__wrapper">
      <AnimateSection animationSlide="slideUp" delay={1200} once={false} translate={30}>

        <SolutionsHead />
      </AnimateSection>
      <SolutionsCategorized {...{ solutions }}/>

    </div>
  </section>
);

export default Solutions;