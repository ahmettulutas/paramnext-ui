import { Button, Col, Row } from "antd";
import React from "react";
import WalletSvg from "@/assets/images/svg-images/wallet.svg";
import TransactionMade from "@/assets/images/svg-images/transaction-made.svg";
import EmptyFrame from "@/assets/images/svg-images/empty-frame.svg";
const OurNumbers = () => (
  <Row className="our-numbers-container" justify="space-between">
    <Col className="text-section" sm={24} md={8}>
      <h1>Uluslararası olarak büyüyün, maliyetleri azaltın</h1>
      <p>Onlarca sektör için API tabanlı kolay ve yönetilebilir finansal teknoloji çözümleri sağlıyoruz. Sizin özel bir çözüme ihtiyacınız varsa lütfen iletişime geçin.</p>
      <Button type="primary outlined">Gönder</Button>
    </Col>
    <Col sm={24} md={14}>
      <Row gutter={[20, 50]}>
        <Col xs={24}>
          <Row gutter={[50, 50]}>
            <Col className="bordered-number" xs={22} lg={8}>
              <h1>32 Milyar</h1>
              <p>Aracılık edilen işlem hacmi</p>
            </Col>
            <Col className="bordered-number" xs={22} lg={8}>
              <h1>90 Milyon</h1>
              <p>Gerçekleşen işlem adedi</p>
            </Col>
            <Col className="bordered-number" xs={22} lg={8}>
              <h1>55 Bin</h1>
              <p>Kurumsal müşteri sayısı</p>
            </Col>
          </Row>
        </Col>
        <Col xs={24} className="image-container">
          <Row gutter={[50, 50]}>
            <Col className="svg-image" xs={12}>
              <WalletSvg />
            </Col>
            <Col className="svg-image" xs={10}>
              <TransactionMade />
            </Col>
            <Col className="svg-image" xs={10}>
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
);
export default OurNumbers;
