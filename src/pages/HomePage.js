import Modal from "../components/Modal";
import Category from "../components/Category";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Modal />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
