import React from "react";
import "./Sidebar.css"; // Import the CSS file

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/cars">Car Models</a></li>
        <li><a href="/bookings">Bookings</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;