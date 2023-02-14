import React from "react";
import TextWithTick from "../../TextWithTick";
import { Button } from "antd";
import RightUp from "@/assets/images/arrow-right-up.svg";
import { FormattedMessage } from "react-intl";

export const SectorCard = ({ features, title, icon, description }) => (
  <section className="sector-card-container">
    <div className="svg-container">{icon}</div>
    <h1><FormattedMessage id={title} /></h1>
    <p className="description"><FormattedMessage id={description} /></p>
    <div>
      {features.map((item, index) => (<TextWithTick key={index} description={<FormattedMessage id={item} />} />))}
    </div>
    <Button type="primary" htmlType="submit" className="with-icon block ml-auto mt-8">
      <FormattedMessage id={title} /> Çözümleri
      {/* {RightUp} */}
      <RightUp />
    </Button>
  </section>
);
