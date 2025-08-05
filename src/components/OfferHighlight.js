import "../styles/offer-highlight.scss";

const OfferHighlight = () => {
  return (
    <section className="offer">
      <div className="offer__left">
        <p className="offer__item">акция до 30 июня</p>
        <p className="offer__item">быстро и безболезненно</p>
      </div>
      <div className="offer__right">
        <h3 className="offer__title">Вернём зрение без боли и страха</h3>
        <p className="offer__subtitle">Фемто-Ласик всего за 42 000 ₽ в июне</p>
      </div>
    </section>
  );
};

export default OfferHighlight;
