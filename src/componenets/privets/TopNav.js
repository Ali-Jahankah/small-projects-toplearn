import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import { dashboardHamburAction } from "../../actions/dropdownAction";
import styles from "../../css/topnav.css";
const TopNav = ({ user }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.dashboardDropdown);
  const toggleMenu = () => {
    dispatch(dashboardHamburAction());
  };
  return (
    <div className={styles.container}>
      <nav className={styles.main_nav}>
        <div className={styles.hambur_menu} onClick={toggleMenu}>
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
              onClick={toggleMenu}
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
              onClick={toggleMenu}
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
              onClick={toggleMenu}
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
