import styles from "../css/todo.css";
import { useState, useContext } from "react";
import SingleTask from "./SingleTask";
import { TaskContext } from "./TaskContext";
import uuid from "react-uuid";
const Todo = () => {
  const context = useContext(TaskContext);

  const [tasks, setTasks] = useState([]);
  const [important] = useState("#ffb300");
  const [notImportant] = useState("#36a53b");
  const [serious] = useState("rgb(241 2 42)");
  const [text, setText] = useState("");
  const [color, setColor] = useState("none");

  const taskValidation = (e) => {
    e.preventDefault();
    if (text.length === 0 || color === "none") {
      alert("noooooooooooooo");
      return;
    }
    const newDate = new Date();
    const date = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    const newTasks = [...context.tasks];
    const newTask = {
      taskText: text,
      taskDate: date,
      taskType: color,
      taskColor: background,
      taskStatus: context.status,
      taskIndex: tasks.length,
      taskChecked: false,
      taskId: uuid(),
    };
    newTasks.push(newTask);
    context.setTasks(newTasks);
    setText("");
    context.setColor(background);
  };
  let background =
    color === "Important"
      ? "#ffb300"
      : color === "Not Important"
      ? "#36a53b"
      : color === "Serious"
      ? "rgb(241,2,42)"
      : "white";
  const handleTextChange = (e) => {
    if (e.target.value.length > 100) {
      alert(100);
      return;
    } else {
      setText(e.target.value);
    }
  };
  const handleTypeChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.writing_tasks}>
          <div className={styles.overlay}></div>
          <div className={styles.writing_container}>
            {/* Pic */}
            <form className={styles.writing_form} onSubmit={taskValidation}>
              <textarea
                placeholder="Your task here..."
                rows="5"
                value={text}
                onChange={handleTextChange}
                required
              ></textarea>
              <select
                value={color}
                onChange={handleTypeChange}
                style={{ background: background }}
              >
                <option value="none">Type...</option>
                <option style={{ background: important }}>Important</option>
                <option style={{ background: notImportant }}>
                  Not Important
                </option>
                <option style={{ background: serious }}>Serious</option>
              </select>
              <button>Add</button>
            </form>
          </div>
        </div>
        <div className={styles.tasks}>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Task</td>
                <td>Date</td>
                <td>Type</td>
                <td>Status</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              <SingleTask></SingleTask>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Todo;
