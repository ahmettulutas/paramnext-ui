import { Col, Row, Typography } from "antd";
import React from "react";
import PropTypes from "prop-types";
import Visa from "../../assets/images/Visa.svg";
import Discover from "../../assets/images/Discover.svg";
import MasterCard from "../../assets/images/MasterCard.svg";
import BKMExpress from "../../assets/images/BKMExpress.svg";
import Troy from "../../assets/images/Troy.svg";
import { FormattedMessage } from "react-intl";
import AnimateSection from "../UIComponents/AnimationSection";

const
  issuers = [MasterCard, Visa, Discover, Troy, BKMExpress],

  CardSchema = ({ titleId, subTitleId, title, subtitle }) => (
    <section className="card-schema">
      <div className="card-schema-wrapper">
        <Row gutter={[{ md: 50 }, { xs: 20 }]}>

          <Col xs={24} sm={16}>
            <AnimateSection animationSlide={"slideRight"} delay={900} once={false} >
              <Typography.Title level={2}>
                { titleId ? <FormattedMessage id={titleId} /> : title }
              </Typography.Title>
            </AnimateSection>
          </Col>

          <Col xs={24} sm={8}>
            <Typography.Text>
              { subTitleId ? <FormattedMessage id={subTitleId} /> : subtitle }
            </Typography.Text>
          </Col>

        </Row>

        <div className="issuers">
          {
            issuers.map((Issuer, index) => (
              <div key={index}>
                <Issuer />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );

CardSchema.propTypes = {
  titleId: PropTypes.string,
  subTitleId: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default CardSchema;