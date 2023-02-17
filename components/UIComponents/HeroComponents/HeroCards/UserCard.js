import { Col, Row } from "antd";
import React from "react";
import TextWithTick from "../../TextWithTick";

const UserCard = ({ title, description, transparent, img }) => (
  <div className={`usercard-container ${transparent ? "transparent" : ""}`}>
    <Row gutter={20} align="middle" style={{ width: "100%" }}>
      <Col xs={6}>{img}</Col>
      <Col xs={18}>
        <div className="flex flex-column">
          <p className="big text-500 lh-big white-text">{title}</p>
          <TextWithTick isUserCard description={description} />
        </div>
      </Col>
    </Row>
  </div>
);
export default UserCard;