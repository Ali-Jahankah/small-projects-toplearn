import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/mobilenav.css";
import { useDispatch, useSelector } from "react-redux";
import { NavPartsAction, Visible } from "../actions/MobileNavAction";
const MobileNavBody = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const part1 = useSelector((state) => state.NavParts1);
  const part2 = useSelector((state) => state.NavParts2);
  const part3 = useSelector((state) => state.NavParts3);

  const closeMenuHandler = () => {
    dispatch(Visible());
  };
  const token = localStorage.getItem("token");
  return (
    <>
      <div className={menu ? styles.menu_div : styles.hide_menu}>
        <div
          className={styles.first_part}
          onClick={() => dispatch(NavPartsAction(1))}
        >
          <h3>First Part</h3>
          <br />
          <div className={part1 ? styles.first_part_menu : styles.hiding}>
            <ul>
              {" "}
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
            </ul>
          </div>
        </div>
        <div
          className={styles.second_part}
          onClick={() => dispatch(NavPartsAction(2))}
        >
          <h3>Second Part</h3>
          <br />
          <div className={part2 ? styles.second_part_menu : styles.hiding}>
            <ul>
              {" "}
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
                {token ? (
                  <NavLink
                    className={styles.links}
                    activeClassName={styles.activLink}
                    to="/Logout"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    className={styles.links}
                    activeClassName={styles.activLink}
                    to="/Login"
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div
          className={styles.third_part}
          onClick={() => dispatch(NavPartsAction(3))}
        >
          <h3>Third Part</h3>
          <br />
          <div className={part3 ? styles.third_part_menu : styles.hiding}>
            <ul>
              {" "}
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
              <li onClick={closeMenuHandler}>
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
        </div>
      </div>
    </>
  );
};

export default MobileNavBody;
