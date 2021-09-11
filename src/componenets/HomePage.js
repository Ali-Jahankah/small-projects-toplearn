import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import styles from "../css/homepage.css";

const HomePage = () => {
  const courses = useSelector((state) => state.courses);
  console.log(courses);
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
      <br></br>
      <h1 className={styles.games_title}>Games</h1>
      <div className={styles.courses_container}>
        {courses.map((course) => {
          return (
            <div id={styles.course_container}>
              <div className={styles.course_div} key={course.id}>
                <img
                  className={styles.course_image}
                  src={course.src}
                  alt={course.name}
                ></img>
                <div className={styles.course_info_div}>
                  <h3 style={{ textDecoration: "underline" }}>{course.name}</h3>
                  <h3>Year:{course.year}</h3>
                  <h3>Type:{course.type}</h3>
                  <h3>Price:${course.price}</h3>
                </div>
              </div>
              <button type="button" className={styles.course_button}> Go To</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
