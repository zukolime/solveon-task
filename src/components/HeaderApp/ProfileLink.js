import { ReactComponent as Person } from "../../resources/icons/person.svg";

const ProfileLink = () => {
  return (
    <div className="header__profile">
      <a href="/">
        <Person className="header__person-icon" />
      </a>
    </div>
  );
};

export default ProfileLink;
