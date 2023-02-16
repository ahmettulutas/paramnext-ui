import { Button, Col, Row } from "antd";
import React from "react";
import WalletSvg from "@/assets/images/svg-images/wallet.svg";
import TransactionMade from "@/assets/images/svg-images/transaction-made.svg";
import EmptyFrame from "@/assets/images/svg-images/empty-frame.svg";
import { FormattedMessage } from "react-intl";

const OurNumbers = () => (
  <section className="our-numbers-container">
    <Row justify="space-between" gutter={[20, 20]}>
      <Col className="text-section" sm={24} lg={8}>
        <Row gutter={[0, 20]}>
          <h3><FormattedMessage id="label.growInternationally" /></h3>
          <p><FormattedMessage id="label.customFintechDescription" /></p>
          <Col xs={16}>
            <Button type="primary outlined"><p className="text-700 dark-blue"><FormattedMessage id="label.talktoCustomerRepresentative" /></p></Button>
          </Col>
        </Row>
      </Col>
      <Col sm={24} lg={14}>
        <Row className="container-responsive-centered tablet">
          <Col className="bordered-number" xs={12} lg={7}>
            <h5>32 Milyar</h5>
            <p>Aracılık edilen işlem hacmi</p>
          </Col>
          <Col className="bordered-number" xs={12} lg={7}>
            <h5>90 Milyon</h5>
            <p>Gerçekleşen işlem adedi</p>
          </Col>
          <Col className="bordered-number" xs={12} lg={7}>
            <h5>55 Bin</h5>
            <p>Kurumsal müşteri sayısı</p>
          </Col>
        </Row>
        <Col xs={24} className="image-container">
          <Row gutter={[50, 30]} justify="space-between">
            <Col className="svg-image" xs={12}>
              <WalletSvg />
            </Col>
            <Col className="svg-image" xs={10}>
              <TransactionMade />
            </Col>
            <Col className="svg-image" xs={12}>
              <EmptyFrame />
            </Col>
            <Col className="svg-image" xs={12}>
              <EmptyFrame />
            </Col>
          </Row>
        </Col>
      </Col>
    </Row>
  </section>
);

export default OurNumbers;
