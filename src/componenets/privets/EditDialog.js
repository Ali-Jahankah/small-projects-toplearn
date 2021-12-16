import React from "react";
import styles from "../../css/editDialog.css";
import { useState, useContext } from "react";
import { DashContext } from "../../context/DashContext";
import { newGameAction } from "../../actions/courseActions";
import { useDispatch } from "react-redux";
const EditDialog = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  // const [url, setUrl] = useState("");
  const context = useContext(DashContext);
  const reset = () => {
    setTitle("");
    setYear("");
    setPrice("");
    setType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let newGame = new FormData();
      newGame.append("src", e.target.imageUrl.files[0]);
      newGame.append("name", title);
      newGame.append("year", year);
      newGame.append("price", Number.parseInt(price));
      newGame.append("type", type);

      dispatch(newGameAction(newGame));
      reset();
      context.setDialog(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.edit_container}>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <table>
            <tbody>
              <tr>
                <td>Title: </td>
                <td className={styles.input}>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  ></input>
                </td>
                <td>{title ? 25 - title.length : 25}</td>
              </tr>
              <tr>
                <td>Year:</td>
                <td className={styles.input}>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  ></input>
                </td>
                <td>{year ? 4 - year.length : 4}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td className={styles.input}>
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  ></input>
                </td>
                <td>{type ? 8 - type.length : 8}</td>
              </tr>
              <tr>
                <td>Price: </td>
                <td className={styles.input}>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  ></input>
                </td>
                <td>{price ? 3 - price.length : 3}</td>
              </tr>
              <tr>
                <td>Image: </td>
                <td className={styles.input}>
                  <input type="file" name="imageUrl"></input>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className={`${styles.input} ${styles.buttons_td}`}>
                  <button className={`${styles.button} ${styles.approve}`}>
                    Approve
                  </button>
                  <button
                    className={`${styles.button} ${styles.cancle}`}
                    onClick={() => {
                      context.setDialog(false);
                    }}
                  >
                    Cancle
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default EditDialog;
