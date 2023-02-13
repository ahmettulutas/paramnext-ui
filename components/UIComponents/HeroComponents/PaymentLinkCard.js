import React from "react";
import Profile2 from "@/assets/images/Profile2.svg";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const PaymentLinkCard = () => (
  <div className="paymentlink-container">
    <Profile2 />
    <h2><FormattedMessage id="label.makePayment" /></h2>
    <Link href="/">
      <a><FormattedMessage id="label.createPaymentLink" /></a>
    </Link>
  </div>
);
export default PaymentLinkCard;
