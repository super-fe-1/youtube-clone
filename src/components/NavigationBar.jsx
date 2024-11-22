import React from "react";
import { FaBars } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/sidebarSlice";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import "../NavigationBar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.sidebar.items);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {/* 햄버거 버튼 */}
      <button className="hamburger-button" onClick={handleToggleSidebar}>
        <FaBars />
      </button>
      {/* YOUTUBE 링크 */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-logo"
      >
        <MdPlayCircleOutline className="youtube-icon" />
        <span>YOUTUBE</span>
      </a>
      {/* 검색창 */}
      <SearchBar />

      {/* 사이드바 */}
      <Sidebar items={items} />
    </>
  );
};

export default Navbar;
