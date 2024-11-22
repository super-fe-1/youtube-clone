import { useState } from "react";
import "../category.css";
import { category } from "../constants/category";
// import { mockContents } from "../constants/mockContents";

const Category = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const handleCategoryClick = (categoryId) => {
  //   setSelectedCategory(categoryId);
  // };

  // const filteredContents = selectedCategory
  //   ? mockContents.filter((content) => content.categoryId === selectedCategory)
  //   : mockContents;

  return (
    <div className="category-container">
      {category.map((category, index) => (
        <span key={index} className="category">
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default Category;
