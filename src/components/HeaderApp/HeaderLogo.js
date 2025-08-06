import { ReactComponent as Logo } from "../../resources/icons/logo.svg";

const HeaderLogo = () => (
  <div className="header__headline">
    <h1 className="header__title">
      <span className="header__title--big">Центр</span> лазерной медицины
    </h1>
    <div className="header__logo">
      <Logo className="header__icon" />
    </div>
  </div>
);

export default HeaderLogo;
