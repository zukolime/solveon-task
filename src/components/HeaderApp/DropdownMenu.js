import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../resources/icons/arrow-up.svg";

const DropdownMenu = ({ links = [] }) => {
  if (!links.length) return null;

  return (
    <ul className="header__items header__items--dropdown">
      {links.map(({ label, href, hasArrow }) => (
        <li key={label} className={`header__item ${hasArrow ? "header__item--inner" : ""}`}>
          <Link to={href} className="header__link">
            {hasArrow ? (
              <>
                <p>{label}</p>
                <div>
                  <Arrow className="header__arrow" />
                </div>
              </>
            ) : (
              label
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
