import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { SliderData } from "./SliderData";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styles from "../../styles/components/imageSlider.module.scss";
//import Slider from "react-slick";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={styles.right_arrow}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slide_active : styles.slide}
            key={index}
          >
            {index === current && (
              <a target="_blank" href={slide.image} style={{ border: "none" }}>
                <img
                  src={slide.image}
                  alt="travel image"
                  className={styles.images}
                />
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
