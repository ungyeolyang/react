import { Link, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const id = localStorage.getItem("ID");
  if (id !== "jsk2024") {
    return <Navigate to="login" replace={true} />;
  }

  return (
    <div>
      <h1>여기가 소개 입니다.</h1>
      <p>리액트 라우트를 사용해 봅니다.</p>
      <p>쿼리스트링 : {location.search}</p>
      <Link to="/">홈으로</Link>
    </div>
  );
};
export default About;
