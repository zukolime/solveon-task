import "../styles/promo-panel.scss";
import { ReactComponent as Arrow } from "../resources/icons/arrow-up.svg";

const PromoPanel = () => {
  return (
    <div className="promo-panel">
      <div className="promo-panel__inner">
        <p className="promo-panel__text">Скидка на Лазерную коррекцию до 60 %</p>
        <div className="promo-panel__timer">
          <span id="days" className="promo-panel__timer-part">
            3
          </span>{" "}
          дня{" "}
          <span id="hours" className="promo-panel__timer-part">
            18
          </span>
          :
          <span id="minutes" className="promo-panel__timer-part">
            18
          </span>
          :
          <span id="seconds" className="promo-panel__timer-part">
            29
          </span>
        </div>
        <a href="/" className="promo-panel__link">
          <Arrow className="promo-panel__icon" />
        </a>
      </div>
    </div>
  );
};

export default PromoPanel;
