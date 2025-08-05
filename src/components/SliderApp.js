import image from "../resources/img/img.webp";

import "../styles/slider-app.scss";

const SliderApp = () => {
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__images-box">
          <img src={image} alt="изображение слайда" className="slider__image" />
        </div>
        <div className="slider__dots">
          <button className="slider__dot"></button>
          <button className="slider__dot"></button>
          <button className="slider__dot slider__dot--active"></button>
          <button className="slider__dot"></button>
          <button className="slider__dot"></button>
        </div>
      </div>
    </div>
  );
};

export default SliderApp;
