import "./AddTaskForm.css";
const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask();
    }
  };

  return (
    <>
      {/* Add Task */}
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="input-addtask"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="what's your task!"
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn-addtask"
            disabled={newTask.trim() === ""}
          >
            Add Task
          </button>
        </div>
      </form>
      <br />
    </>
  );
};

export default AddTaskForm;
