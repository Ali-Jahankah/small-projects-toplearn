import { BrowserRouter, NavLink } from "react-router-dom";
import styles from "../css/navbody.css";
const NavBody = () => {
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
          </ul>
        </div>
        <div className={styles.menuLogo}>
          <img src="/images/navlogo.png " alt="menu-logo"></img>
        </div>
      </div>
    </>
  );
};

export default NavBody;
