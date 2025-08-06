import { useState, useEffect } from "react";

import image1 from "../../resources/img/img1.webp";
import image2 from "../../resources/img/img2.webp";
import image3 from "../../resources/img/img3.webp";
import image4 from "../../resources/img/img4.webp";
import image5 from "../../resources/img/img5.webp";

import "../../styles/slider-app.scss";

const images = [image1, image2, image3, image4, image5];

const SliderApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__images-box">
          <img loading="lazy" src={images[currentIndex]} alt={`изображение слайда ${currentIndex + 1}`} className="slider__image" />
        </div>
        <div className="slider__dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`slider__dot ${index === currentIndex ? "slider__dot--active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderApp;
