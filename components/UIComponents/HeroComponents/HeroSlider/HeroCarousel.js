import React from "react";
import { Carousel, Col, Row } from "antd";
import { SectorCard } from "./SectorCard";
import { data } from "@/data/sectors.js";

const HeroCarousel = () => (
  <Carousel className="carousel">
    <Row gutter={20}>
      {data.map(item => (<Col key={item.id} xs={24} lg={8}>
        <SectorCard features={item.features} title={item.title} icon={item.icon} description={item.description} />
      </Col>)
      )}
    </Row>
    <Row>
      <Row>
        {data.map(item => (<Col key={item.id} xs={24} lg={8}>
          <SectorCard features={item.features} title={item.title} icon={item.icon} description={item.description} />
        </Col>)
        )}
      </Row>
    </Row>
  </Carousel>
);
export default HeroCarousel;