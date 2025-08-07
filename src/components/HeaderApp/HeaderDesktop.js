import { useState } from "react";

import UIButton from "../UIButton";
import DropdownMenu from "./DropdownMenu";
import ProfileLink from "./ProfileLink";

import { mainNavLinks, subNavLinks } from "../../data/navLinks";

const HeaderDesktop = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="header__navbar">
      <ul className="header__items">
        {mainNavLinks.map((item) => (
          <li className="header__item" key={item.label} label={item.label}>
            <a className="header__link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}

        <li className="header__item" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <span className="header__item--trigger">ещё:</span>
          {isDropdownOpen && <DropdownMenu links={subNavLinks} />}
        </li>
      </ul>

      <div className="header__controls">
        <UIButton text="Записаться" />
        <div className="header__profile">
          <ProfileLink />
        </div>
      </div>
    </nav>
  );
};

export default HeaderDesktop;
