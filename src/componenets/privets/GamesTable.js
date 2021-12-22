import React, { useContext } from "react";
import styles from "../../css/gamestable.css";
import Pagination from "../pagination/Pagination";
import { DashContext } from "../../context/DashContext";
import AddDialog from "./AddDialog";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

const GamesTable = () => {
  const context = useContext(DashContext);
  const {
    dialog,
    editDialog,
    deleteDialog,
    setSearch,
    filteredList,
    games,
    desc,
    asc,
  } = context;
  return (
    <>
      {dialog ? <AddDialog></AddDialog> : null}
      {editDialog ? <EditDialog></EditDialog> : null}
      {deleteDialog ? <DeleteDialog></DeleteDialog> : null}
      <div className={styles.header_div}>
        <button
          className={styles.new_game_button}
          onClick={() => {
            context.setDialog(true);
          }}
        >
          Add a new game +
        </button>
        <input
          type="text"
          className={styles.search_field}
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
      <div className={styles.main}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Year</th>
              <th>Type</th>
              <th>
                <img
                  src="/img/svg/up.svg"
                  alt="arrow up"
                  onClick={desc}
                  style={{ cursor: "pointer" }}
                />
                Price
                <img
                  src="/img/svg/down.svg"
                  alt="arrow up"
                  onClick={asc}
                  style={{ cursor: "pointer" }}
                />
              </th>
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
        courses={filteredList.length}
        currentPage={context.currentPage}
        perPage={context.gamesPerPage}
        pageChange={context.handleChange}
      ></Pagination>
    </>
  );
};

export default GamesTable;
