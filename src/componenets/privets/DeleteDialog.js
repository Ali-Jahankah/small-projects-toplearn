import React, { useContext } from "react";
import styles from "../../css/deleteDialog.css";
import { useDispatch } from "react-redux";
import { DashContext } from "../../context/DashContext";
import { deleteGameAction } from "../../actions/courseActions";

const DeleteDialog = () => {
  const context = useContext(DashContext);
  const dispatch = useDispatch();
  const { course, setDeleteDialog } = context;
  console.log(course);
  return (
    <div className={styles.container}>
      <div className={styles.second_container}>
        <div className={styles.content}>
          <h1>
            Are you sure that you want remove{" "}
            <span style={{ color: "red" }}>{course.name}</span> from the shop?{" "}
          </h1>
          <div className={styles.btn_div}>
            <button
              className={styles.btn}
              onClick={() => {
                dispatch(deleteGameAction(course._id));
                setDeleteDialog(false);
              }}
            >
              Yes
            </button>
            <button
              className={styles.btn}
              onClick={() => {
                setDeleteDialog(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
