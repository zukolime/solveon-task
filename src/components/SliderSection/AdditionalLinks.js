import "../../styles/additional-links.scss";

const AdditionalLinks = () => {
  return (
    <div className="additional-links">
      <div className="additional-links__inner">
        <ul className="additional-links__items">
          <li className="additional-links__item">
            <a href="/" className="additional-links__link">
              Вопросы
            </a>
          </li>
          <li className="additional-links__item">
            <a href="/" className="additional-links__link">
              Больше акций
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalLinks;
