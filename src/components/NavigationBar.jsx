import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Sidebar from "./SideBar";
import "../NavigationBar.css";
import { FaBars } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* 햄버거 버튼 */}
      <button className="hamburger-button" onClick={handleToggleSidebar}>
        <FaBars />
      </button>
      {/* YOUTUBE 링크 */}
      <Link to={"/"} className="youtube-logo">
        <MdPlayCircleOutline className="youtube-icon" />
        <span>YOUTUBE</span>
      </Link>

      <SearchBar />

      {/* 사이드바 */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Navbar;
