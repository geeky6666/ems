import React from "react";

// Shows a greeting with the user's name and a Log Out button.
// name    -> "Admin" or the employee's first name
// onLogout -> function from App.jsx that logs the user out
const Header = ({ name, onLogout }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{name} 👋</span>
      </h1>
      <button
        onClick={onLogout}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
