import React from "react";
import Profile1 from "@/assets/images/userProfile/Profile1.svg";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const PaymentLinkCard = () => (
  <div className="paymentlink-container">
    <Profile1 />
    <p className="lh-big text-500 black-text"><FormattedMessage id="label.makePayment" /></p>
    <Link href="/">
      <a><FormattedMessage id="label.createPaymentLink" /></a>
    </Link>
  </div>
);
export default PaymentLinkCard;
