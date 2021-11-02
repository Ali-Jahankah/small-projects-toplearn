import React from "react";
import { useSelector } from "react-redux";
import styles from "../../css/gamestable.css";
import { useState } from "react";
import { paginate } from "../pagination/paginate";
import Pagination from "../pagination/Pagination";

const GamesTable = () => {
  const courses = useSelector((state) => state.courses);
  const [gamesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const games = paginate(courses, currentPage, gamesPerPage);
  return (
    <>
      <div className={styles.new_game_button}>Add a new game +</div>
      <div className={styles.main}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Year</th>
              <th>Type</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {games.map((item, index) => (
              <tr key={item.id} title={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.type}</td>
                <td>{item.price === 0 ? "Free" : "$" + item.price}</td>
                <td>
                  <button className={`${styles.button} ${styles.edit}`}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
      <Pagination
        courses={courses}
        currentPage={currentPage}
        perPage={gamesPerPage}
        pageChange={setCurrentPage}
      ></Pagination>
    </>
  );
};

export default GamesTable;
