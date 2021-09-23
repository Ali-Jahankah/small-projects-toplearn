import styles from "../css/games.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "./paginate";
import Pagination from "./Pagination";
import { errorAction } from "../actions/courseActions";

const Games = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(8);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const games = paginate(courses, currentPage, gamesPerPage);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    dispatch(errorAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className={styles.games_title}>Games</h1>
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
      <Pagination
        courses={courses}
        currentPage={currentPage}
        perPage={gamesPerPage}
        pageChange={onPageChange}
      ></Pagination>
    </>
  );
};

export default Games;
