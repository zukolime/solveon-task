import { Link } from "react-router-dom";

const NavItem = ({ label, href }) => (
  <li className="header__item">
    <Link to={href} className="header__link">
      {label}
    </Link>
  </li>
);

export default NavItem;
