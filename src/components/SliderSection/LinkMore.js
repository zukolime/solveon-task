import { Link } from "react-router-dom";

import "../../styles/link-more.scss";
import { ReactComponent as Arrow } from "../../resources/icons/arrow-up.svg";

const LinkMore = () => {
  return (
    <div className="link-more">
      <Link to="/" className="link-more__inner">
        <div className="link-more__icon">
          <Arrow className="link-more__logo" />
        </div>
        <p className="link-more__text">ПОДРОБНЕЕ</p>
      </Link>
    </div>
  );
};

export default LinkMore;
