import React from "react";
import { FormattedMessage } from "react-intl";
import HomeParamTechCard from "./HomeParamNextCard";
import UserCard from "./UserCard";
import Profile2 from "@/assets/images/Profile2.svg";
import PaymentLinkCard from "./PaymentLinkCard";

const HeroCardContainer = () => (
  <div className="hero-grid-container">
    <UserCard title="Sena Durusoy" description={<FormattedMessage id="label.paymentRequest" />} transparent img={<Profile2 />}/>
    <UserCard title="Sena Durusoy" description={<FormattedMessage id="label.paymentRequest" />} img={<Profile2 />}/>
    <HomeParamTechCard />
    <PaymentLinkCard />
  </div>
);
export default HeroCardContainer;