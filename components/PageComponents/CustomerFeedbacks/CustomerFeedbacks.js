import React from "react";
import CustomerCard from "./CustomerCard";
import { data } from "@/data/customerFeedbacks";
import { Col, Row } from "antd";
import { FormattedMessage } from "react-intl";

const CustomerFeedbacks = () => (
  <section className="customer-feedbacks-container">
    <Row justify="center">
      <Col className="mb-16" xs={24} md={8}>
        <h3 className="mb-32"><FormattedMessage id="label.focusOnYourBusiness" /></h3>
        <p><FormattedMessage id="label.customerDescription" /></p>
      </Col>
      <Col xs={24} md={16} className="customer-cards-container">
        {data.map(customer => (<CustomerCard key={customer.id} item={customer}/>))}
      </Col>
    </Row>
  </section>
);

export default CustomerFeedbacks;