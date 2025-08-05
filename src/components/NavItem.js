const NavItem = ({ label, href }) => (
  <li className="header__item">
    <a href={href} className="header__link">
      {label}
    </a>
  </li>
);

export default NavItem;
