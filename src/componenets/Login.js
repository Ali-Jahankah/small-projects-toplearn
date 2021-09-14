import React from "react";
import { useContext, useState } from "react";
import { userLogin } from "../services/useService";
import { EditContext } from "./EditContext";
import styles from "../css/navbody.css";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { login } from "../actions/loginAction";
import Preloader from "./Preloader";
const Login = ({ history }) => {
  const context = useContext(EditContext);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
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
        dispatch(login());
        reset();
        history.replace("/");
      }
    } catch (ex) {
      setLoading(false);
      console.log(ex);
      alert("User not found!");
      reset();
    }
  };
  return (
    <>
      {loading ? <Preloader></Preloader> : null}

      <div className={styles.login_form_div}>
        <h1>Login Form</h1>
        <Helmet>
          {" "}
          <title>Login | Small projects</title>
        </Helmet>
        <form onSubmit={handleLogin} className={styles.login_form}>
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
    </>
  );
};

export default Login;
