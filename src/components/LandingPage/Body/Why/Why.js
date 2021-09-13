import React from "react";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { Element } from "react-scroll";

import "pure-react-carousel/dist/react-carousel.es.css";

import "./Why.css";

import slide1 from "../../../../assets/baohanh.jpg";
import slide2 from "../../../../assets/Aochinhhang.jpg";
import slide3 from "../../../../assets/Size.jpg";

const Why = () => {
  // eslint-disable-next-line
  const whyChooseUs = [
    {
      id: "1",
      title: "reason1",
    },
    {
      id: "2",
      title: "reason2",
    },
    {
      id: "3",
      title: "reason3",
    },
  ];

  return (
    <div className="why">
      <Element className="carousel__container" name="why">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={75}
          totalSlides={3}
          visibleSlides={1}
          currentSlide={1}
          className="slider"
          infinite={true}
          interval={3000}
          isPlaying={true}
        >
          <Slider>
            <Slide index={0}>
              <img alt="slide1" src={slide1} className="carousel--image" />
            </Slide>
            <Slide index={1}>
              <img alt="slide1" src={slide2} className="carousel--image" />
            </Slide>
            <Slide index={2}>
              <img alt="slide1" src={slide3} className="carousel--image" />
            </Slide>
          </Slider>
          <Dot slide={0} className="carousel--dot" />
          <Dot slide={1} className="carousel--dot" />
          <Dot slide={2} className="carousel--dot" />
        </CarouselProvider>
      </Element>
    </div>
  );
};

export default Why;
