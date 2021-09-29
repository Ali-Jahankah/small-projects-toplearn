import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavLink, withRouter, Link, Route } from "react-router-dom";
import {
  dropdown1Action,
  dropdown2Action,
  dropdown3Action,
} from "../actions/dropdownAction";
import { Visible } from "../actions/MobileNavAction";
import styles from "../css/navbody.css";
import UserProfile from "./UserProfile.js";
import { isEmpty } from "lodash";
const NavBody = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const user = useSelector((state) => state.user);
  const dropdown1 = useSelector((state) => state.dropdown1);
  const dropdown2 = useSelector((state) => state.dropdown2);
  const dropdown3 = useSelector((state) => state.dropdown3);
  const token = localStorage.getItem("token");
  console.log(user);
  // const dropdown3 = useSelector((state) => state.dropdown3);

  const mobileMenuHandler = () => {
    dispatch(Visible());
  };
  const dropdown1Handler = () => {
    dispatch(dropdown1Action());
  };
  const dropdown2Handler = () => {
    dispatch(dropdown2Action());
  };
  const dropdown3Handler = () => {
    dispatch(dropdown3Action());
  };
  return (
    <>
      <div id={styles.container}>
        <div className={styles.menu_div}>
          <div
            onMouseEnter={dropdown1Handler}
            onMouseLeave={dropdown1Handler}
            onClick={dropdown1Handler}
            className={styles.nav_items}
          >
            First Part
            {dropdown1 ? (
              <div className={styles.dropdown1}>
                <ul>
                  <li>
                    <NavLink
                      className={styles.links}
                      activeclassname={styles.activLink}
                      to="/Home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.links}
                      activeclassname={styles.activLink}
                      to="/People"
                    >
                      People
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.links}
                      activeclassname={styles.activLink}
                      to="/ToDo"
                    >
                      ToDo
                    </NavLink>
                  </li>
                  <li>
                    {token ? null : (
                      <NavLink
                        className={styles.links}
                        activeclassname={styles.activLink}
                        to="/Regester"
                      >
                        Register
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div
            onMouseEnter={dropdown2Handler}
            onMouseLeave={dropdown2Handler}
            onClick={dropdown2Handler}
            className={styles.nav_items}
          >
            Second Part
            {dropdown2 ? (
              <div className={styles.dropdown2}>
                <ul>
                  <li>
                    {token ? (
                      <NavLink
                        className={styles.links}
                        activeclassname={styles.activLink}
                        to="/Logout"
                      >
                        Logout
                      </NavLink>
                    ) : (
                      <NavLink
                        className={styles.links}
                        activeclassname={styles.activLink}
                        to="/Login"
                      >
                        Login
                      </NavLink>
                    )}
                  </li>
                  <li>
                    <NavLink
                      className={styles.links}
                      activeclassname={styles.activLink}
                      to="/Counter-Redux"
                    >
                      Redux-Counter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.links}
                      activeclassname={styles.activLink}
                      to="/People-Management-Redux"
                    >
                      People-Redux
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.links}
                      activeclassname={styles.activLink}
                      to="/React-jquery"
                    >
                      React-jquery
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div
            onMouseEnter={dropdown3Handler}
            onMouseLeave={dropdown3Handler}
            onClick={dropdown3Handler}
            className={styles.nav_items}
          >
            Third Part
            {dropdown3 ? (
              <div className={styles.dropdown3}>
                <ul>
                  <li>
                    <NavLink
                      className={styles.links}
                      activeclassname={styles.activLink}
                      to="/Games"
                    >
                      Games
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
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
        <div style={{ fontSize: "2vw", fontWeight: "bold" }}>
          <Link
            to={`/User/${user.userId}`}
            className={styles.links}
            activeclassname={styles.activLink}
          >
            {user.fullname}
          </Link>
          {user.fullname && (
            <Link
              to="/Logout"
              className={styles.links}
              activeclassname={styles.activLink}
            >
              / Logout
            </Link>
          )}
        </div>

        <div className={styles.menuLogo}>
          <img src="/images/navlogo.png " alt="menu-logo"></img>
        </div>
      </div>
      
      <Route path="/User/:id" component={UserProfile}></Route>
    </>
  );
};

export default withRouter(NavBody);
