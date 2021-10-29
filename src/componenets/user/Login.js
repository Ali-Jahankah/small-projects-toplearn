import React, { useContext } from "react";
import styles from "../../css/navbody.css";
import { Helmet } from "react-helmet";
import Preloader from "../main/Preloader";
import { Redirect } from "react-router-dom";
import { Context } from "../../context/Context";

const Login = () => {
  const {
    loading,
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    loginValidator,
  } = useContext(Context);
  const token = localStorage.getItem("token");

  if (token) return <Redirect to="/Home" />;
  return (
    <>
      {loading ? <Preloader></Preloader> : null}

      <div className={styles.login_form_div}>
        <h1>Login Form</h1>
        <Helmet>
          {" "}
          <title>Login | Small projects</title>
        </Helmet>
        <form onSubmit={(e) => handleLogin(e)} className={styles.login_form}>
          <input
            type="text"
            placeholder="Email Address"
            className={styles.login_input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <span style={{ color: "#00f3ff" }}>
            {" "}
            {loginValidator.current.message("email", email, "email|required")}
          </span>
          <input
            type="password"
            placeholder="Password"
            className={styles.login_input}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <span style={{ color: "#00f3ff" }}>
            {" "}
            {loginValidator.current.message(
              "password",
              password,
              "required|min:7"
            )}
          </span>
          <button type="submit" className={styles.login_button}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
