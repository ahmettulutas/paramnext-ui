import React from "react";
import { classNames } from "@/lib/helpers";

const GradientBorder = ({ children, className }) => (
  <div className={classNames(["gradient-border", className])}>
    {children}
  </div>
);

export default GradientBorder;