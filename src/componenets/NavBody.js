import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavLink, withRouter } from "react-router-dom";
import { Visible } from "../actions/MobileNavAction";
import styles from "../css/navbody.css";
const NavBody = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const menu = useSelector((state) => state.menu);
  const mobileMenuHandler = () => {
    dispatch(Visible());
  };
  return (
    <>
      <div id={styles.container}>
        <div className={styles.menuDiv}>
          <ul>
            <li>
              <NavLink
                className={styles.links}
                activeClassName={styles.activLink}
                to="/Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.links}
                activeClassName={styles.activLink}
                to="/People"
              >
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.links}
                activeClassName={styles.activLink}
                to="/ToDo"
              >
                ToDo
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.links}
                activeClassName={styles.activLink}
                to="/Regester"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.links}
                activeClassName={styles.activLink}
                to="/Login"
              >
                Login
              </NavLink>
            </li>
            <li>
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
        <div className={styles.hamburger_button} onClick={mobileMenuHandler}>
          <div
            className={`${styles.hamburger_parts} ${
              menu ? styles.first_part : null
            }`}
          ></div>
          <div
            className={`${styles.hamburger_parts} ${
              menu ? styles.second_part : null
            } `}
          ></div>
          <div
            className={`${styles.hamburger_parts} ${
              menu ? styles.third_part : null
            }`}
          ></div>
        </div>
        <span style={{ fontSize: "2vw", fontWeight: "bold" }}>
          {" "}
          {login ? "You are signed in!" : null}
        </span>

        <div className={styles.menuLogo}>
          <img src="/images/navlogo.png " alt="menu-logo"></img>
        </div>
      </div>
    </>
  );
};

export default withRouter(NavBody);
