import { Link } from "react-router-dom";

import { ReactComponent as Person } from "../../resources/icons/person.svg";

const ProfileLink = () => {
  return (
    <div className="header__profile">
      <Link to="/">
        <Person className="header__person-icon" />
      </Link>
    </div>
  );
};

export default ProfileLink;
