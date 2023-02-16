import { Button, Col, Row } from "antd";
import React from "react";
import WalletSvg from "@/assets/images/svg-images/wallet.svg";
import TransactionMade from "@/assets/images/svg-images/transaction-made.svg";
import EmptyFrame from "@/assets/images/svg-images/empty-frame.svg";
import { FormattedMessage } from "react-intl";

const OurNumbers = () => (
  <section className="our-numbers-container">
    <Row justify="space-between">
      <Col className="text-section" sm={24} md={8}>
        <h3 className="mb-0"><FormattedMessage id="label.growInternationally" /></h3>
        <p className="mb-0"><FormattedMessage id="label.customFintechDescription" /></p>
        <Button type="primary outlined"><p className="text-700 dark-blue mb-0"><FormattedMessage id="label.talktoCustomerRepresentative" /></p></Button>
      </Col>
      <Col sm={24} md={14}>
        <Row gutter={[0, 50]}>
          <Col xs={24}>
            <Row justify="space-between">
              <Col className="bordered-number" xs={22} lg={7}>
                <h5 className="mb-0">32 Milyar</h5>
                <p>Aracılık edilen işlem hacmi</p>
              </Col>
              <Col className="bordered-number" xs={22} lg={7}>
                <h5>90 Milyon</h5>
                <p>Gerçekleşen işlem adedi</p>
              </Col>
              <Col className="bordered-number" xs={22} lg={7}>
                <h5>55 Bin</h5>
                <p>Kurumsal müşteri sayısı</p>
              </Col>
            </Row>
          </Col>
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
        </Row>
      </Col>
    </Row>
  </section>
);

export default OurNumbers;
