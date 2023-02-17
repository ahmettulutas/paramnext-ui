import React, { useRef } from "react";
import { Button, Carousel, Col, Row } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { SectorCard } from "./SectorCard";
import { data } from "@/data/sectors.js";

const HeroCarousel = () => {

  const
    carouselRef = useRef(null),
    handleNext = () => carouselRef.current.next(),
    handlePrev = () => carouselRef.current.prev();

  return (
    <div className="carousel-container">
      <Button onClick={handlePrev} type="text" className="carousel-slider-button left" >
        <ArrowLeftOutlined className="carousel-slider-button-icon" />
      </Button>
      <Carousel ref={carouselRef} dotPosition="none">
        <Row>
          {data.first.map(item => (
            <Col key={item.id} xs={24} lg={8}>
              <SectorCard features={item.features} title={item.title} icon={item.icon} description={item.description} />
            </Col>
          ))}
        </Row>
        <Row>
          {data.second.map(item => (
            <Col key={item.id} xs={24} lg={8}>
              <SectorCard features={item.features} title={item.title} icon={item.icon} description={item.description} />
            </Col>
          ))}
        </Row>
      </Carousel>
      <Button onClick={handleNext} type="text" className="carousel-slider-button right">
        <ArrowRightOutlined className="carousel-slider-button-icon" />
      </Button>
    </div>
  );
};

export default HeroCarousel;