import "../styles/link-more.scss";
import { ReactComponent as Arrow } from "../resources/icons/arrow-up.svg";

const LinkMore = () => {
  return (
    <div className="link-more">
      <a href="/" className="link-more__inner">
        <div className="link-more__icon">
          <Arrow className="link-more__logo" />
        </div>
        <p className="link-more__text">ПОДРОБНЕЕ</p>
      </a>
    </div>
  );
};

export default LinkMore;
