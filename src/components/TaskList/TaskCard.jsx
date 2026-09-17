import React from "react";

// Instead of having 4 almost-identical files (one for each status),
// we use ONE TaskCard component and just change its color and its
// buttons based on task.status. This is much easier to read and
// change later.

// Pick a background color depending on the task's status.
const statusColors = {
  new: "bg-green-400",
  active: "bg-red-400",
  completed: "bg-blue-400",
  failed: "bg-yellow-400",
};

const TaskCard = ({ task, taskIndex, onUpdateStatus }) => {
  return (
    <div
      className={`flex-shrink-0 h-full w-[300px] p-5 rounded-xl ${statusColors[task.status]}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{task.category}</h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2">{task.taskDescription}</p>

      {/* The buttons shown depend on the current status */}
      <div className="flex justify-between mt-6">
        {task.status === "new" && (
          <button
            onClick={() => onUpdateStatus(taskIndex, "active")}
            className="w-full bg-blue-500 rounded font-medium py-1 px-2 text-xs"
          >
            Accept Task
          </button>
        )}

        {task.status === "active" && (
          <>
            <button
              onClick={() => onUpdateStatus(taskIndex, "completed")}
              className="bg-green-500 rounded font-medium py-1 px-2 text-xs"
            >
              Mark as Completed
            </button>
            <button
              onClick={() => onUpdateStatus(taskIndex, "failed")}
              className="bg-red-500 rounded font-medium py-1 px-2 text-xs"
            >
              Mark as Failed
            </button>
          </>
        )}

        {task.status === "completed" && (
          <button
            disabled
            className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs"
          >
            Completed
          </button>
        )}

        {task.status === "failed" && (
          <button
            disabled
            className="w-full bg-red-500 rounded font-medium py-1 px-2 text-xs"
          >
            Failed
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
