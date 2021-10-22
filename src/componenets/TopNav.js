import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "../css/topnav.css";
const TopNav = () => {
  const { url } = useRouteMatch();
  return (
    <div className={styles.container}>
      <nav className={styles.main_nav}>
        <ul>
          <li>
            <NavLink
              to="/Home"
              activeClassName={styles.activeLink}
              className={styles.link}
              exact
            >
              Going to Website
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Logout"
              activeClassName={styles.activeLink}
              className={styles.link}
              exact
            >
              SignOut
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/Admin_Profile`}
              activeClassName={styles.activeLink}
              className={styles.link}
              exact
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
