import { useState } from "react";

import UIButton from "./UIButton";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import ProfileLink from "./ProfileLink";

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

const DesktopHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
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
        <UIButton text="Записаться" />
        <div className="header__profile">
          <ProfileLink />
        </div>
      </div>
    </nav>
  );
};

export default DesktopHeader;
