import React from "react";
import PropTypes from "prop-types";
import ourCustomers from "../../../data/ourCustomers.json";
import OurCustomersLine from "./OurCustomers.Line";
import { ourCustomersTypes } from "@/lib/constants";
import { classNames } from "@/lib/helpers";

const OurCustomers = ({ type, data }) => {
  const CustomersComponent = props => {
    switch (type) {
      case ourCustomersTypes.line:
        return <OurCustomersLine {...props} data={data}/>;
      default:
        return null;
    }
  };

  return (
    <section className={classNames(["our-customers", type])}>
      <CustomersComponent {...{ fallbackData: ourCustomers }}/>
    </section>
  );
};

OurCustomers.propTypes = {
  type: PropTypes.oneOf(Object.keys(ourCustomersTypes)).isRequired
};

export default OurCustomers;