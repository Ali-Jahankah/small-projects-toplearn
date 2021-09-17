import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "./paginate";
import { Link, NavLink } from "react-router-dom";
import styles from "../css/homepage.css";
import { setUser } from "../actions/userAction";
import { decodeToken } from "../services/decodeToken";

const HomePage = ({ history }) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const games = paginate(courses, 1, 8);
  const gamesHandler = () => {
    history.push("/Games");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      const dateNow = Date.now() / 1000;
      if (decodedToken.payload.exp < dateNow) {
        localStorage.removeItem("token");
      } else {
        dispatch(setUser(decodedToken.payload.user));
      }
    }
  }, []);

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
      <div style={{ position: "relative" }}>
        <h1 className={styles.games_title}>Games </h1>
        <div className={styles.allgames_div} onClick={gamesHandler}>
          See All The Games...
        </div>
        <div className={styles.courses_container}>
          {games.map((course) => {
            return (
              <div id={styles.course_container} key={course._id}>
                <Link to={`Games/${course._id}`}>
                  <div className={styles.course_div}>
                    <img
                      className={styles.course_image}
                      src={course.src}
                      alt={course.name}
                    ></img>

                    <div className={styles.course_info_div}>
                      <h3 style={{ textDecoration: "underline" }}>
                        {course.name}
                      </h3>
                      <h3>Year:{course.year}</h3>
                      <h3>Type:{course.type}</h3>
                      <h3>Price:${course.price}</h3>
                    </div>
                  </div>
                  <button type="button" className={styles.course_button}>
                    {" "}
                    Go To
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
