import { mockContents } from "../constants/mockContents";
import ContentCard from "../components/ContentCard";

const HomePage = () => {
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockContents.map((content) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
