import React from "react";
import TaskCard from "./TaskCard";

// Shows every task of the logged-in employee, side by side.
// employee        -> the logged-in employee object (has .tasks array)
// updateTaskStatus -> function from App.jsx to change a task's status
const TaskList = ({ employee, updateTaskStatus }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {employee.tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          taskIndex={index}
          onUpdateStatus={(taskIndex, newStatus) =>
            updateTaskStatus(employee.id, taskIndex, newStatus)
          }
        />
      ))}
    </div>
  );
};

export default TaskList;
