import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

// The screen the admin sees after logging in.
// employees -> list of all employees
// addTask   -> function to create a new task for an employee
// onLogout  -> function to log out
const AdminDashboard = ({ employees, addTask, onLogout }) => {
  return (
    <div className="h-screen w-full p-7">
      <Header name="Admin" onLogout={onLogout} />
      <CreateTask employees={employees} addTask={addTask} />
      <AllTask employees={employees} />
    </div>
  );
};

export default AdminDashboard;
