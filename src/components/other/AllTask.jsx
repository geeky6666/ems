import React from "react";

// Table the admin sees, showing every employee and how many tasks
// they have in each status. Just like TaskListNumbers, we count the
// tasks here instead of trusting a separately-stored number.
const AllTask = ({ employees }) => {
  const countByStatus = (tasks, status) =>
    tasks.filter((task) => task.status === status).length;

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      {employees.map((employee) => (
        <div
          key={employee.id}
          className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
        >
          <h2 className="text-lg font-medium w-1/5">{employee.firstName}</h2>
          <h3 className="text-lg font-medium w-1/5 text-blue-400">
            {countByStatus(employee.tasks, "new")}
          </h3>
          <h5 className="text-lg font-medium w-1/5 text-yellow-400">
            {countByStatus(employee.tasks, "active")}
          </h5>
          <h5 className="text-lg font-medium w-1/5 text-white">
            {countByStatus(employee.tasks, "completed")}
          </h5>
          <h5 className="text-lg font-medium w-1/5 text-red-600">
            {countByStatus(employee.tasks, "failed")}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
