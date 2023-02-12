import React from "react";
import { Button as AntButton } from "antd";


const Button = props => {
  const componentProps = {};

  for (const prop in props)
    if (prop !== "children")
      componentProps[prop] = props[prop];

  return (
    <AntButton {...componentProps}>
      <div>
        {props.children}
      </div>
    </AntButton>
  );
};

export default Button;