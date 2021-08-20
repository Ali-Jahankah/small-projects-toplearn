import React from "react";
import { Helmet } from "react-helmet";

import { NavLink } from "react-router-dom";
import styles from "../css/homepage.css";
const HomePage = () => {
  return (
    <>
      <h2 className={styles.headerText}>Choose your Topic:</h2>
      <Helmet>
        <title>Home page | Small projects</title>
      </Helmet>
      <div className={styles.main}>
        <div id={styles.container}>
          <NavLink to="/ToDo">
            <div className={styles.todoContainer}>
              <h3>ToDo</h3>
            </div>
          </NavLink>
          <NavLink to="/People">
            <div className={styles.peopleContainer}>
              <h3>People management</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomePage;
