import React from "react";

// Shows 4 small boxes with how many tasks are in each status.
// We COUNT the tasks here instead of storing the count separately
// somewhere else -- that way the numbers can never go "out of sync"
// with the real tasks.
const TaskListNumbers = ({ employee }) => {
  const countByStatus = (status) =>
    employee.tasks.filter((task) => task.status === status).length;

  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-bold">{countByStatus("new")}</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">{countByStatus("completed")}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl text-black font-bold">{countByStatus("active")}</h2>
        <h3 className="text-xl mt-0.5 text-black font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-bold">{countByStatus("failed")}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
