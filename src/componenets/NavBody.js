import { BrowserRouter, NavLink } from "react-router-dom";
import styles from "../css/navbody.css";
const NavBody = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Submit");
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
                Regester
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.login_form}>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email Address"
              className={styles.login_input}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className={styles.login_input}
            ></input>
            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </form>
        </div>
        <div className={styles.menuLogo}>
          <img src="/images/navlogo.png " alt="menu-logo"></img>
        </div>
      </div>
    </>
  );
};

export default NavBody;
