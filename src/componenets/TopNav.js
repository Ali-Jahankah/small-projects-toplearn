import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import { dashboardHamburAction } from "../actions/dropdownAction";
import styles from "../css/topnav.css";
const TopNav = ({ user }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.dashboardDropdown);
  return (
    <div className={styles.container}>
      <nav className={styles.main_nav}>
        <div
          className={styles.hambur_menu}
          onClick={() => dispatch(dashboardHamburAction())}
        >
          {user.fullname}
        </div>
      </nav>
      <div className={menu ? styles.hambur_div : styles.hide}>
        <ul>
          <li>
            <NavLink
              to="/Home"
              activeClassName={styles.activeLink}
              className={styles.link}
              exact
            >
              Main Website
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
      </div>
    </div>
  );
};

export default TopNav;
