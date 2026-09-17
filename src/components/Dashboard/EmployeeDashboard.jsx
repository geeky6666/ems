import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

// The screen an employee sees after logging in.
// employee         -> the logged-in employee's data (name, tasks, etc.)
// updateTaskStatus -> function to accept / complete / fail a task
// onLogout         -> function to log out
const EmployeeDashboard = ({ employee, updateTaskStatus, onLogout }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header name={employee.firstName} onLogout={onLogout} />
      <TaskListNumbers employee={employee} />
      <TaskList employee={employee} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;
