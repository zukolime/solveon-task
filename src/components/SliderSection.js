import SliderApp from "./SliderApp";
import LinkMore from "./LinkMore";
import AdditionalLinks from "./AdditionalLinks";

import "../styles/slider-section.scss";

const SliderSection = () => {
  return (
    <section className="slider-section">
      <SliderApp></SliderApp>
      <LinkMore></LinkMore>
      <AdditionalLinks></AdditionalLinks>
    </section>
  );
};

export default SliderSection;
