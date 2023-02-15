import UserCard from "@/components/UIComponents/HeroComponents/HeroCards/UserCard";
import React from "react";
import { FormattedMessage } from "react-intl";

const CustomerCard = ({ item }) => {
  const { customerName, position, feedback, icon } = item;
  return (
    <div className="customer-card">
      <UserCard title={customerName} description={position} img={icon} transparent/>
      <p><FormattedMessage id={feedback} /></p>

    </div>
  );
};

export default CustomerCard;