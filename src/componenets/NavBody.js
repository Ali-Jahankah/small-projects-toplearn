import React from "react";
import { useSelector } from "react-redux";

import { NavLink, withRouter } from "react-router-dom";
import styles from "../css/navbody.css";
const NavBody = () => {
  const login = useSelector((state) => state.login);
  console.log(login);
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
            <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
              {" "}
              {login ? "You are signed in!" : null}
            </li>
          </ul>
        </div>

        <div className={styles.menuLogo}>
          <img src="/images/navlogo.png " alt="menu-logo"></img>
        </div>
      </div>
    </>
  );
};

export default withRouter(NavBody);
