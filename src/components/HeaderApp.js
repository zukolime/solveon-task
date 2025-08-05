import { useState } from "react";
import UIButton from "./UIButton";
import HeaderLogo from "./HeaderLogo";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import { ReactComponent as Person } from "../resources/icons/person.svg";

import "../styles/header-app.scss";

const mainNavLinks = [
  { label: "Врачи", href: "/" },
  { label: "услуги", href: "/" },
  { label: "мед туризм", href: "/" },
  { label: "омс", href: "/" },
  { label: "контакты", href: "/" },
];

const dropdownLinks = [
  { label: "о клинике", href: "/" },
  { label: "документы", href: "/" },
  { label: "вакансии", href: "/" },
  { label: "вопросы врачам", href: "/" },
  { label: "новости", href: "/" },
  {
    label: "справочник болезней",
    href: "/",
    hasArrow: true,
  },
  { label: "сотрудничество", href: "/" },
];

const HeaderApp = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <HeaderLogo />
        <nav className="header__navbar">
          <ul className="header__items">
            {mainNavLinks.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}

            <li className="header__item" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <span className="header__item--trigger">ещё:</span>
              {isDropdownOpen && <DropdownMenu links={dropdownLinks} />}
            </li>
          </ul>

          <div className="header__controls">
            <UIButton />
            <div className="header__profile">
              <a href="/">
                <Person className="header__person-icon" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
