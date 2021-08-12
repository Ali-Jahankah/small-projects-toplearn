import React, { useContext } from "react";
import uuid from "react-uuid";
import { TaskContext } from "./TaskContext";
import Svg from "./SvgDeleteTodo";

const SingleTask = () => {
  const context = useContext(TaskContext);
  return (
    <React.Fragment>
      {context.tasks.map((myTask, index) => {
        return (
          <tr
            key={uuid()}
            style={{
              background: myTask.taskColor,
              textDecoration: myTask.taskChecked ? "line-Through" : "none",
            }}
          >
            <td>{index + 1}</td>
            <td style={{ wordBreak: "break-all" }}>{myTask.taskText}</td>
            <td>{myTask.taskDate}</td>
            <td>{myTask.taskType}</td>
            <td>
              <input
                type="checkbox"
                onChange={(e) => {
                  context.handleCheckbox(index);
                }}
                checked={myTask.taskChecked}
              ></input>
              {myTask.taskStatus}
            </td>
            <td>
              <Svg id={myTask.taskId}></Svg>
            </td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default SingleTask;
