import "../styles/header-app.scss";
import logo from "../resources/icons/logo.svg";
import arrow from "../resources/icons/arrow-up-outline.svg";
import person from "../resources/icons/person.svg";

const HeaderApp = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__headline">
          <h1 className="header__title">
            <span className="header__title--big">Центр</span> лазерной медицины
          </h1>
          <div className="header__logo">
            <img className="header__icon" src={logo} alt="Логотип центра лазерной медицины" />
          </div>
        </div>
        <nav className="header__navbar">
          <ul className="header__items">
            <li className="header__item">
              <a href="/" className="header__link">
                Врачи
              </a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link">
                услуги
              </a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link">
                мед туризм
              </a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link">
                омс
              </a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link">
                контакты
              </a>
            </li>
            <li className="header__item">
              ещё:
              <ul className="header__items header__items--dropdown">
                <li className="header__item">
                  <a href="/" className="header__link">
                    о клинике
                  </a>
                </li>
                <li className="header__item">
                  <a href="/" className="header__link">
                    документы
                  </a>
                </li>
                <li className="header__item">
                  <a href="/" className="header__link">
                    вакансии
                  </a>
                </li>
                <li className="header__item">
                  <a href="/" className="header__link">
                    вопросы врачам
                  </a>
                </li>
                <li className="header__item">
                  <a href="/" className="header__link">
                    новости
                  </a>
                </li>
                <li className="header__item header__item--inner">
                  <a href="/" className="header__link">
                    <p>справочник болезней</p>
                    <div>
                      <img src={arrow} alt="Стрелка" />
                    </div>
                  </a>
                </li>
                <li className="header__item">
                  <a href="/" className="header__link">
                    сотрудничествое
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="header__controls">
            <button className="button">Записаться</button>
            <div className="header__profile">
              <a href="/">
                <img className="header__person-icon" src={person} alt="Иконка человека" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
