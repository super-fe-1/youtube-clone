import React from "react";
import "../category.css";

const Category = () => {
  const categories = ["전체", "음악", "영화", "게임", "뉴스"];

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <span key={index} className="category">
          {category}
        </span>
      ))}
    </div>
  );
};

export default Category;
