import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.scss";

import Hamburger from "./Hamburger/Hamburger";
import userImage from "../../../images/header/user.svg";
import authImage from "../../../images/header/gym.svg";
import arrowImage from "../../../images/header/arrow.svg";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const history = useHistory();
  const { location } = history;

  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      {location.pathname !== "/" ? (
        <button type="button" onClick={() => history.goBack()}>
          <img
            src={arrowImage}
            alt="Back"
            draggable={false}
            width="29"
            height="23"
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => history.push(isAuth ? "/profile" : "/auth")}
        >
          <img
            src={isAuth ? authImage : userImage}
            alt="Auth"
            height="30"
            width="30"
            draggable={false}
          />
        </button>
      )}
      <Hamburger />
    </header>
  );
};

export default Header;
