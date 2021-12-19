import React, { useContext } from "react";
import styles from "../../css/gamestable.css";
import Pagination from "../pagination/Pagination";
import { DashContext } from "../../context/DashContext";
import AddDialog from "./AddDialog";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

const GamesTable = () => {
  const context = useContext(DashContext);

  return (
    <>
      {context.dialog ? <AddDialog></AddDialog> : null}
      {context.editDialog ? <EditDialog></EditDialog> : null}
      {context.deleteDialog ? <DeleteDialog></DeleteDialog> : null}

      <div
        className={styles.new_game_button}
        onClick={() => {
          context.setDialog(true);
        }}
      >
        Add a new game +
      </div>
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
            {context.games.map((item, index) => (
              <tr key={item.id} title={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.type}</td>
                <td>{item.price === 0 ? "Free" : "$" + item.price}</td>
                <td>
                  <button
                    className={`${styles.button} ${styles.edit}`}
                    onClick={() => {
                      context.editDialogDisplay(item);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => {
                      context.deleteDialogDisplay(item);
                    }}
                  >
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
        courses={context.courses}
        currentPage={context.currentPage}
        perPage={context.gamesPerPage}
        pageChange={context.handleChange}
      ></Pagination>
    </>
  );
};

export default GamesTable;
