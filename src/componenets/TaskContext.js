import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [color, setColor] = useState("white");
  const [status] = useState("Undone!");

  const handleCheckbox = (x) => {
    const newTasks = [...tasks];
    if (newTasks[x].taskStatus === "Done!") {
      newTasks[x].taskStatus = "Undone!";
      newTasks[x].taskChecked = false;
    } else if (newTasks[x].taskStatus === "Undone!") {
      newTasks[x].taskStatus = "Done!";
      newTasks[x].taskChecked = true;
    }
    setTasks(newTasks);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newTasks = [...tasks];
    const newTask = newTasks.filter((task) => {
      return task.taskId !== id;
    });
    setTasks(newTask);
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        setTasks: setTasks,
        color,
        setColor,
        handleCheckbox,
        status,
        handleDelete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
