import React, { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import employeesData, { adminCredentials } from "./data/employeesData";


// App.jsx is the "brain" of the whole application.
// It is the ONLY place where the main data lives:
//   - the list of all employees (and their tasks)
//   - who is currently logged in
//
// Every other component just RECEIVES this data as props and calls
// functions (also passed as props) whenever it wants to change
// something. This is a very common and simple pattern in React
// called "lifting state up" and it means we do NOT need extra tools
// like the Context API to share data between components.
// ------------------------------------------------------------------
// ------------------------------------------------------------------
const App = () => {
 
  const [employees, setEmployees] = useState(employeesData);

 
  const [loggedInUser, setLoggedInUser] = useState(null);

  // ---------------- LOGIN ----------------
  const handleLogin = (email, password) => {
    // 1) Check if it is the admin
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setLoggedInUser({ role: "admin" });
      return;
    }

    // 2) Otherwise check if it matches one of the employees
    const employee = employees.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employee) {
      setLoggedInUser({ role: "employee", id: employee.id });
    } else {
      alert("Invalid Credentials");
    }
  };

  // ---------------- LOGOUT ----------------
  const handleLogout = () => {
    setLoggedInUser(null);
  };

  // ---------------- ADMIN: CREATE A NEW TASK ----------------
  const addTask = (employeeId, newTask) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) => {
        if (emp.id !== employeeId) return emp; // leave other employees unchanged
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
        };
      })
    );
  };

  // ---------------- EMPLOYEE: CHANGE A TASK'S STATUS ----------------
  // taskIndex = position of the task inside that employee's tasks array
  const updateTaskStatus = (employeeId, taskIndex, newStatus) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) => {
        if (emp.id !== employeeId) return emp;

        const updatedTasks = emp.tasks.map((task, idx) =>
          idx === taskIndex ? { ...task, status: newStatus } : task
        );

        return { ...emp, tasks: updatedTasks };
      })
    );
  };

  // ---------------- WHAT TO SHOW ON SCREEN ----------------

  // Nobody logged in yet -> show the login page
  if (!loggedInUser) {
    return <Login handleLogin={handleLogin} />;
  }

  // Admin is logged in
  if (loggedInUser.role === "admin") {
    return (
      <AdminDashboard
        employees={employees}
        addTask={addTask}
        onLogout={handleLogout}
      />
    );
  }

  // Employee is logged in -> find their up-to-date data from the employees list
  const currentEmployee = employees.find((emp) => emp.id === loggedInUser.id);

  return (
    <EmployeeDashboard
      employee={currentEmployee}
      updateTaskStatus={updateTaskStatus}
      onLogout={handleLogout}
    />
  );
};

export default App;
