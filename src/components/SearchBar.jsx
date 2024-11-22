import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`검색어: ${searchTerm}`); // 검색어 출력 (실제 로직으로 교체 가능)
  };

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="검색"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" className="search-btn">
        <FaSearch /> {/* 아이콘 추가 */}
      </button>
    </form>
  );
};

export default SearchBar;
