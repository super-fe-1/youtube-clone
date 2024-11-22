import { FaFolder, FaHome } from "react-icons/fa";
import React from "react";
import { useSelector } from "react-redux";
import "../SideBar.css";

const Sidebar = ({ items }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      {items.map((item, index) => (
        <div key={index} className="sidebar-item">
          <div className="sidebar-icon">
            {React.createElement(item.icon)} {/* 동적으로 아이콘 생성 */}
          </div>
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
