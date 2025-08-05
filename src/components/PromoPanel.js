import { ReactComponent as Arrow } from "../resources/icons/arrow-up.svg";
import "../styles/promo-panel.scss";
import CountdownTimer from "./CountdownTimer";

const PromoPanel = () => {
  return (
    <div className="promo-panel">
      <div className="promo-panel__inner">
        <p className="promo-panel__text">Скидка на Лазерную коррекцию до 60 %</p>
        <CountdownTimer targetDate="2025-08-13T00:00:00" />
        <a href="/" className="promo-panel__link">
          <Arrow className="promo-panel__icon" />
        </a>
      </div>
    </div>
  );
};

export default PromoPanel;
