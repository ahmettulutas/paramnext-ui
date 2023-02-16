import React from "react";
import TextWithTick from "../../TextWithTick";
import { Button } from "antd";
import RightUp from "@/assets/images/arrow-right-up.svg";
import { FormattedMessage } from "react-intl";

export const SectorCard = ({ features, title, icon, description }) => (
  <section className="sector-card-container">
    <div className="svg-container">{icon}</div>
    <h5 className="mb-0 text-800 dark-blue"><FormattedMessage id={title} /></h5>
    <p className="small lh-small mb-0"><FormattedMessage id={description} /></p>
    <div>
      {features.map((item, index) => (<TextWithTick key={index} description={<FormattedMessage id={item} />} />))}
    </div>
    <Button type="primary" htmlType="submit" className="with-icon block ml-auto mt-8">
      <div>
        <FormattedMessage id={title} />
        <span> Çözümleri</span>
      </div>
      <RightUp />
    </Button>
  </section>
);
