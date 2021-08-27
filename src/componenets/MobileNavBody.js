import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/mobilenav.css";
import { useDispatch } from "react-redux";
import { Visible } from "../actions/MobileNavAction";
const MobileNavBody = () => {
  const dispatch = useDispatch();
  const closeMenuHandler = () => {
    dispatch(Visible());
  };
  return (
    <>
      <div className={styles.menu_div}>
        <ul>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/Home"
            >
              Home
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/People"
            >
              People
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/ToDo"
            >
              ToDo
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/Regester"
            >
              Register
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/Login"
            >
              Login
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/Counter-Redux"
            >
              Redux-Counter
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.menuLogo}>
        <img src="/images/navlogo.png " alt="menu-logo"></img>
      </div>
    </>
  );
};

export default MobileNavBody;
