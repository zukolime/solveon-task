import { Link } from "react-router-dom";

import "../../styles/additional-links.scss";

const AdditionalLinks = () => {
  return (
    <div className="additional-links">
      <div className="additional-links__inner">
        <ul className="additional-links__items">
          <li className="additional-links__item">
            <Link to="/" className="additional-links__link">
              Вопросы
            </Link>
          </li>
          <li className="additional-links__item">
            <Link to="/" className="additional-links__link">
              Больше акций
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalLinks;
