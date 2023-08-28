import "./ToDo.css";
import React from "react";
const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task) => {
            return (
              <React.Fragment key={task.id}>
                <div className="todo">
                  <div className={task.status ? "done" : ""}>
                    <span className="task-title">{task.title}</span>
                  </div>
                  <div>
                    <span
                      className="fa-solid"
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <i class="fa-solid fa-check"></i>
                    </span>
                    {}

                    {task.status ? null : (
                      <span
                        className="fa-regular"
                        title="Edit"
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </span>
                    )}
                    <span
                      className="fa-delete"
                      title="Delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      <i class="fa-solid fa-delete-left"></i>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;
