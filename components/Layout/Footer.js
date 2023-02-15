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


const Footer = () => (
  <AntLayout.Footer>
    <div className="footer__wrapper">
      <Row>
        <Col xs={24} md={12}>
          <Row gutter={[0, 25]}>
            <Col xs={16} sm={14} md={12} className="brand-logo">
              <Logo />
            </Col>
            <Col xs={24} >
              <Row gutter={[{ xs: 20 }]}>
                <Col xs={24}>
                  <p className="text-700">
                    <FormattedMessage id="label.financialQuickSolutions" />
                  </p>
                </Col>
                <Col xs={24} sm={16}>
                  <p>
                    <FormattedMessage id="label.allRightsReserved" values={{ year: new Date().getFullYear() }} />
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} className="footer-subfooter">
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
        </Col>
      </Row>


    </div >
  </AntLayout.Footer >
);

export default Footer;