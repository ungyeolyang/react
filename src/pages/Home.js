import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");

  const onChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        onChange={onChange}
      />
      <Link to="/about">소개</Link>
      <p>
        <Link to={`profiles/${user}`}>프로필 보기</Link>
      </p>
      <p>
        <Link to="/articles">게시판 목록</Link>
      </p>
    </div>
  );
};
export default Home;
