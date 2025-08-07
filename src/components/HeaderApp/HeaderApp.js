import { useState, useEffect } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import HeaderLogo from "./HeaderLogo";

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
        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      </div>
    </header>
  );
};

export default HeaderApp;
