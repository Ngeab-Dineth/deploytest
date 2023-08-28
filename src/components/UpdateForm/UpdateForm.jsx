import "./UpdateForm.css";
const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateData && updateData.title.trim() !== "") {
      updateTask();
    }
  };

  return (
    <>
      {/* Update Task */}
      <form className="update-form" onSubmit={handleSubmit}>
        <div>
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="input-update"
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn-update"
            disabled={!updateData || updateData.title.trim() === ""}
          >
            Update
          </button>
        </div>
        <div>
          <button onClick={cancelUpdate} className="btn-cancel">
            Cancel
          </button>
        </div>
      </form>
      <br />
    </>
  );
};

export default UpdateForm;
