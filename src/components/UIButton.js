import "../styles/ui-button.scss";

const UIButton = ({ text, classNames = "" }) => {
  return <button className={`button ${classNames}`}>{text}</button>;
};

export default UIButton;
