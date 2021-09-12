import styles from "../css/games.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./paginate";

const Games = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(8);
  const courses = useSelector((state) => state.courses);
  const pages = courses / gamesPerPage;
  const games = paginate(courses, currentPage, gamesPerPage);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
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
                  <h3 style={{ textDecoration: "underline" }}>{course.name}</h3>
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
  );
};

export default Games;
