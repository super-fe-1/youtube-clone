import { useEffect, useState } from "react";
import Category from "../components/Category";
import ContentCard from "../components/ContentCard";
import { mockContents } from "../constants/mockContents";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredContents, setFilteredContents] = useState(mockContents);

  const handleCategoryClick = () => {
    if (selectedCategory === "all") {
      setFilteredContents(mockContents);
      return;
    }
    const filtered = mockContents.filter(
      (content) => content.category === selectedCategory
    );
    setFilteredContents(filtered);
  };

  useEffect(() => {
    handleCategoryClick();
  }, [selectedCategory]);

  return (
    <>
      <Category setSelectedCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredContents.map((content) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
