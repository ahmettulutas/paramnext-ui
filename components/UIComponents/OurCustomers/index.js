import React from "react";
import PropTypes from "prop-types";
import ourCustomers from "../../../data/ourCustomers.json";
import OurCustomersGrid from "./OurCustomers.Grid";
import OurCustomersBanner from "./OurCustomers.Banner";
import OurCustomersLine from "./OurCustomers.Line";
import { ourCustomersTypes } from "@/lib/constants";
import { classNames } from "@/lib/helpers";

const OurCustomers = ({ type, data }) => {
  const CustomersComponent = props => {
    switch (type) {
      case ourCustomersTypes.grid:
        return <OurCustomersGrid {...props} data={data}/>;
      case ourCustomersTypes.banner:
        return <OurCustomersBanner {...props} data={data}/>;
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