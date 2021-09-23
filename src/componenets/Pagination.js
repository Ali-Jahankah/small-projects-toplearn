import styles from "../css/paginate.css";
import { range } from "lodash";
const Pagination = ({ courses, currentPage, perPage, pageChange }) => {
  const totalPages = Math.ceil(courses.length / perPage);
  const pages = range(1, totalPages + 1);
  if (totalPages === 1) return null;
  return (
    <div className={styles.paginate_container}>
      <ul>
        {pages.map((page) => {
          return (
            <li
              key={page}
              onClick={() => {
                pageChange(page);
              }}
              className={currentPage === page ? styles.active : ""}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
