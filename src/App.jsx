import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTask/AddTaskForm";
import ToDo from "./components/ToDo/ToDo";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import "./App.css";

// key for stroing in local storage
const LOCALSTORAGE_TASKS_KEY = "todolist-tasks";
function App() {
  // Tasks TodoList State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Mark task done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  // Local Storage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(toDo));
    }
  }, [toDo]);

  useEffect(() => {
    const tasksLocal = localStorage.getItem(LOCALSTORAGE_TASKS_KEY);
    tasksLocal && setToDo(JSON.parse(tasksLocal));
    setIsLoading(false);
  }, []);

  return (
    <div className="container">
      <h2>ToDo List</h2>
      <br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDos When no items*/}
      {toDo && toDo.length ? "" : "No Tasks"}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
