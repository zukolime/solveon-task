import { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";
import UIButton from "../UIButton";
import { ReactComponent as CloseIcon } from "../../resources/icons/close.svg";
import NavItem from "./NavItem";
import "../../styles/header-mobile.scss";

import { mainNavLinks, subNavLinks } from "../../data/navLinks";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="header-mobile">
      {!isOpen && (
        <div className="header-mobile__controls">
          <UIButton text="записаться" />
          <BurgerButton onClick={() => setIsOpen(true)} />
        </div>
      )}

      <div className={`mobile-menu ${isOpen ? "mobile-menu--visible" : ""}`}>
        <div className="mobile-menu__overlay">
          <div className="mobile-menu__header">
            <h3 className="mobile-menu__title">центр лазерной медицины</h3>
            <button className="mobile-menu__close-btn" onClick={() => setIsOpen(false)} aria-label="Закрыть меню">
              <CloseIcon />
            </button>
          </div>

          <div className="mobile-menu__content">
            <ul className="mobile-menu__items">
              {mainNavLinks.map((item) => (
                <li key={item.label} className="mobile-menu__item">
                  <a className="mobile-menu__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <span>ещё:</span>
              <ul className="mobile-menu__subitems">
                {subNavLinks.map((item) => (
                  <li key={item.label} className="mobile-menu__subitem">
                    <a className="mobile-menu__sublink" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ul>
          </div>

          <div className="mobile-menu__buttons">
            <UIButton text="личный кабинет" classNames="button--secondary" />
            <UIButton text="записаться" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
