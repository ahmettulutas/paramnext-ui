import React from "react";
import { classNames } from "@/lib/helpers";

const PageContent = ({ children, className }) => (
  <div
    className={classNames([
      "container",
      className
    ])}
  >
    {children}
  </div>
);

export default PageContent;