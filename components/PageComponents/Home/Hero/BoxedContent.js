import React from "react";
import { Button, Col, Row } from "antd";


const BoxedContent = () => (


  <Row className="boxed-content-container" align="center">
    <Col className="content" xs={24} md={14}>
      <h1 className="bc-title">Özel bir finansal teknoloji çözümüne mi ihtiyacınız var?</h1>
      <p>Onlarca sektör için API tabanlı kolay ve yönetilebilir finansal teknoloji çözümleri sağlıyoruz. Sizin özel bir çözüme ihtiyacınız varsa lütfen iletişime geçin.</p>
    </Col>
    <Col xs={24} md={10} className="btn-container">
      <Button type="primary outlined">Gönder</Button>
    </Col>
  </Row>

);


export default BoxedContent;