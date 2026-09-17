import React, { useState } from "react";

// Form the admin uses to create a new task and assign it to an employee.
// employees -> list of employees, used to fill the "Assign to" dropdown
// addTask   -> function from App.jsx that actually adds the task
const CreateTask = ({ employees, addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      status: "new", // every new task starts as "new"
    };

    // assignTo holds the employee's id (as a string, because that is
    // what <select> gives us), so we convert it to a number.
    addTask(Number(assignTo), newTask);

    // clear the form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#1c1c1c] border-[1px] border-gray-400 mb-4"
            >
              <option value="" disabled>
                Select an employee
              </option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.firstName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
