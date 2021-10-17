import React from "react";
import styles from "../css/regester.css";
import { useContext } from "react";

import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Preloader from "./Preloader";
import { Context } from "../context/Context";
const Regester = () => {
  const {
    loading,

    name,
    email,
    lastname,
    password,
    setName,
    setEmail,
    setLastname,

    setPassword,
    validator,
    formSubmit,
  } = useContext(Context);

  const token = localStorage.getItem("token");

  const handleName = (e) => {
    setName(e.target.value);
    validator.current.showMessageFor("name");
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
    validator.current.showMessageFor("fullname");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    validator.current.showMessageFor("email");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    validator.current.showMessageFor("password");
  };
  if (token) return <Redirect to="/Home" />;
  return (
    <>
      <Helmet>
        {" "}
        <title>Register | Small projects</title>
      </Helmet>
      <div id={styles.regesterDiv}>
        {loading ? <Preloader></Preloader> : null}
        <form id={styles.regesterForm} onSubmit={(e) => formSubmit(e)}>
          <h1 id={styles.regesterTitle}>Let's Regester</h1>
          <ul>
            <li>
              <input
                type="text"
                name="name"
                className={styles.regester_name}
                placeholder="Name"
                value={name}
                onChange={handleName}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message("name", name, "required")}
              </span>
            </li>
            <li>
              <input
                type="text"
                name="lastname"
                className={styles.regester_lastname}
                placeholder="Last name"
                value={lastname}
                onChange={handleLastname}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message("lastname", lastname, "required")}
              </span>
            </li>
            <li>
              <input
                type="email"
                name="email"
                className={styles.regester_email}
                placeholder="Email Address"
                value={email}
                onChange={handleEmail}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message("email", email, "email|required")}
              </span>
            </li>
            <li>
              <input
                type="password"
                name="password"
                className={styles.regester_password}
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message(
                  "password",
                  password,
                  "required|min:7"
                )}
              </span>
            </li>
            <li>
              <button type="submit" className={styles.regester_sub_button}>
                Regester!
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Regester;
