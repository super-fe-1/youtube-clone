import { useParams } from "react-router-dom";
const DetailPage = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>Detail Page</h1>
      <p>이 페이지의 id는 {id}</p>
    </div>
  );
};

export default DetailPage;
