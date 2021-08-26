import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/mobilenav.css";

const MobileNavBody = () => {
  return (
    <>
      <div className={styles.menu_div}>
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
            {/* {login ? "You are signed in!" : null} */}
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
