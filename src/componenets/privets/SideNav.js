import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../css/sidenav.css";
const SideNav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/Dashboard"
            activeClassName={styles.isActive}
            className={styles.link}
            exact
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Dashboard/Games-table"
            activeClassName={styles.isActive}
            className={styles.link}
            exact
          >
            Games Table
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
