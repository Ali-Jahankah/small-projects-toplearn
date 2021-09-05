import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/mobilenav.css";
import { useDispatch, useSelector } from "react-redux";
import { Visible } from "../actions/MobileNavAction";
const MobileNavBody = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const closeMenuHandler = () => {
    dispatch(Visible());
  };
  return (
    <>
      <div className={menu ? styles.menu_div : styles.hide_menu}>
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
          <li onClick={closeMenuHandler}>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/People-Management-Redux"
            >
              People-Redux
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.links}
              activeClassName={styles.activLink}
              to="/React-jquery"
            >
              React-jquery
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavBody;
