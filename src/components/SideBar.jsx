import React from "react";
import "../SideBar.css";
import { iconsItems } from "../constants/iconsItems";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      {Object.values(iconsItems).map((item, index) => (
        <div key={index} className="sidebar-item">
          <div className="sidebar-icon">{React.createElement(item.icon)}</div>
          <span
            className={`sidebar-label ${isSidebarOpen ? "open" : "closed"}`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
