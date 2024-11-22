import { category } from "../constants/category";
import "../category.css";

const Category = ({ setSelectedCategory }) => {
  return (
    <div className="category-container">
      {category.map((category, index) => (
        <button
          key={index}
          className="category"
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
