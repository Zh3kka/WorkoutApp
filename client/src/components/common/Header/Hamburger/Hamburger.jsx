import React from "react";
import { Link, useHistory } from "react-router-dom";
import { menu } from "./menuBase";
import hamburgerImage from "../../../../images/header/hamburger.svg";
import hamburgerCloseImage from "../../../../images/header/hamburger-close.svg";
import styles from "./Hamburger.module.scss";
import { useAuth } from "../../../../hooks/useAuth";
import { useOutsideAlerter } from "../../../../hooks/useOutsideAlerter";

const Hamburger = () => {
  const history = useHistory();
  const { isAuth, setIsAuth } = useAuth();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(true);
    setIsComponentVisible(false);
  };

  const handleLogin = () => {
    history.push("/auth");
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <img
          src={isComponentVisible ? hamburgerCloseImage : hamburgerImage}
          alt="Menu"
          height="24"
          width="27"
          draggable={false}
        />
      </button>
      <nav
        className={`${styles.menu} ${isComponentVisible ? styles.show : ""}`}
      >
        <ul>
          {menu.map((item, idx) => (
            <li key={`_menu_${idx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li>
            {isAuth ? (
              <button onClick={handleLogout} className={styles.logout}>
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className={styles.logout}>
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
