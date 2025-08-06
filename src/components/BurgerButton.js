import { ReactComponent as Burger } from "../resources/icons/burger.svg";

const BurgerButton = ({ onClick }) => {
  return (
    <button className="burger-button" onClick={onClick} aria-label="Открыть меню">
      <Burger />
    </button>
  );
};

export default BurgerButton;
