import QuickHelpForm from "@/components/UIComponents/QuickHelpForm";
import React from "react";
import HaveProjectSvg from "@/assets/images/have-project.svg";
import { FormattedMessage } from "react-intl";

export const HaveProject = () => (
  <section className="have-project-container">
    <div className="title">
      <h1><FormattedMessage id="label.contact" /></h1>
      <h2><FormattedMessage id="label.haveAProject1" /></h2>
      <p><FormattedMessage id="label.contactUs2" /></p>
    </div>
    <QuickHelpForm />
    <div className="svg-container">
      <HaveProjectSvg />
    </div>
  </section>
);
