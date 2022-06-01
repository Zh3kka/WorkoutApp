import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.scss";

import Hamburger from "./Hamburger/Hamburger";
import userImage from "../../../images/header/user.svg";
import arrowImage from "../../../images/header/arrow.svg";

const Header = () => {
  const history = useHistory();
  const { location } = history;

  return (
    <header className={styles.header}>
      {location.pathname !== "/" ? (
        <button type="button" onClick={() => history.push('/')}>
          <img src={arrowImage} alt="Auth" />
        </button>
      ) : (
        <button type="button" onClick={() => history.push('/auth')}>
          <img src={userImage} alt="Auth" />
        </button>
      )}

      <Hamburger />
    </header>
  );
};

export default Header;
