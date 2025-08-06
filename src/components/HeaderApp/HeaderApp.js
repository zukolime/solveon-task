import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import HeaderMobile from "./HeaderMobile";
import HeaderLogo from "./HeaderLogo";

// import NavItem from "./NavItem";
// import DropdownMenu from "./DropdownMenu";
// import ProfileLink from "./ProfileLink";
// import UIButton from ""../UIButton"";

import "../../styles/header-app.scss";

const HeaderApp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <HeaderLogo />
        {isMobile ? <HeaderMobile /> : <DesktopHeader />}
      </div>
    </header>
  );
};

export default HeaderApp;
