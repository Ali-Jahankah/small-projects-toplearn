import { NavLink, withRouter } from "react-router-dom";
import { EditContext } from "./EditContext";
import { useContext } from "react";
import styles from "../css/navbody.css";
import { userLogin } from "../services/useService";
const NavBody = ({ history }) => {
  const context = useContext(EditContext);

  const reset = () => {
    context.setLoginEmail("");
    context.setLoginPassword("");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = context.loginEmail;
    const password = context.loginPassword;
    const user = { email, password };
    try {
      const { status, data } = await userLogin(user);
      if (status === 200) {
        alert("Login Successfuly!");
        console.log(data);
        localStorage.setItem("token", data.token);
        reset();
        history.replace("/");
      }
    } catch (ex) {
      console.log(ex);
      alert("User not found!");
    }
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
              value={context.loginEmail}
              onChange={(e) => {
                context.setLoginEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className={styles.login_input}
              value={context.loginPassword}
              onChange={(e) => {
                context.setLoginPassword(e.target.value);
              }}
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

export default withRouter(NavBody);
