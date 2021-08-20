import React from "react";

import { NavLink, withRouter } from "react-router-dom";
import { EditContext } from "./EditContext";
import { useContext, useState } from "react";
import styles from "../css/navbody.css";
import { userLogin } from "../services/useService";
import { Lines } from "react-preloaders2";
const NavBody = ({ history }) => {
  const context = useContext(EditContext);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const { status, data } = await userLogin(user);
      if (status === 200) {
        console.log(data);
        localStorage.setItem("token", data.token);
        setLoading(false);
        reset();
        history.replace("/");
      }
    } catch (ex) {
      setLoading(false);
      console.log(ex);
      alert("User not found!");
    }
  };
  return (
    <>
      {loading ? <Lines time={0} customLoading={loading} /> : null}
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
