import React from "react";
import { FaBars } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import SearchBar from "./SearchBar";
import Sidebar from "./SideBar";
import "../NavigationBar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../constants/store";
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
      <a href="index.js" className="youtube-logo">
        <MdPlayCircleOutline className="youtube-icon" />
        <span>YOUTUBE</span>
      </a>

      <SearchBar />

      {/* 사이드바 */}
      <Sidebar items={items} />
    </>
  );
};

export default Navbar;
