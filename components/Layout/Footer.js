import React from "react";
import { Col, Layout as AntLayout, Row } from "antd";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import Github from "@/assets/images/github.svg";
import Twitter from "@/assets/images/twitter.svg";
import Facebook from "@/assets/images/facebook.svg";
import Instagram from "@/assets/images/instagram.svg";
import LinkedIn from "@/assets/images/linkedin.svg";
import TranslatedLink from "../UIKit/TranslatedLink";

const Footer = () => (
  <AntLayout.Footer>
    <div className="footer__wrapper">

      <Row className="brand-logo" gutter={50}>
        <Col xs={24} sm={8} xl={6}>
          <Logo />
        </Col>
      </Row>

      <Row gutter={50}>

        <Col xs={24} sm={9}>
          <p className="footer-desc">
            <FormattedMessage id="label.footer" />
          </p>
        </Col>

        <Col xs={24} sm={15}>
          <Row gutter={[{}, { xs: 20 }]}>
            <Col xs={24}>
              <p className="text-700">
                <FormattedMessage id="label.quickMenu" />
              </p>
            </Col>

            <Col xs={24} sm={16}>
              <TranslatedLink href="/information-society">
                <a> <FormattedMessage id="label.informationSocietyServices" /> </a>
              </TranslatedLink>
              <TranslatedLink href="/privacy-policy">
                <a> <FormattedMessage id="label.privacyPolicy" /> </a>
              </TranslatedLink>
              <TranslatedLink href="/clarification-text">
                <a> <FormattedMessage id="label.clarificationText" /> </a>
              </TranslatedLink>
            </Col>

            <Col xs={24} sm={8}>
              <TranslatedLink href="/security-advice">
                <a> <FormattedMessage id="label.securityAdvice" /> </a>
              </TranslatedLink>
              <TranslatedLink href="/business-permit">
                <a> <FormattedMessage id="label.businessPermit" /> </a>
              </TranslatedLink>
              <TranslatedLink href="/frame-agreement">
                <a> <FormattedMessage id="label.frameAgreement" /> </a>
              </TranslatedLink>
            </Col>
          </Row>
        </Col>


      </Row>

      <Row className="footer-subfooter" align="middle">
        <Col xs={{ span: 24, order: 2 }} sm={{ span: 12, order: 1 }}>
          <p>
            <FormattedMessage id="label.allRightsReserved" values={{ year: new Date().getFullYear() }} />
          </p>
        </Col>
        <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 2 }} className="social-icons">

          <Link href="/">
            <a aria-label="github" target="_blank"> <Github /> </a>
          </Link>

          <Link href="https://twitter.com/ParamTeknoloji">
            <a aria-label="twitter" target="_blank"> <Twitter /> </a>
          </Link>

          <Link href="https://www.facebook.com/profile.php?id=100083612275741">
            <a aria-label="facebook" target="_blank"> <Facebook /> </a>
          </Link>

          <Link href="https://www.instagram.com/paramteknoloji/">
            <a aria-label="instagram" target="_blank"> <Instagram /> </a>
          </Link>

          <Link href="https://www.linkedin.com/company/paramtech">
            <a aria-label="linkedin" target="_blank"> <LinkedIn /> </a>
          </Link>

        </Col>
      </Row>

    </div >
  </AntLayout.Footer >
);

export default Footer;