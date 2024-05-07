import { Link, Outlet } from "react-router-dom"; //내부의 컴포넌트중에 하나 꺼내올때

const Articles = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글3</Link>
        </li>
      </ul>
      <Outlet />
      <Link to="/">홈으로</Link>
    </>
  );
};
export default Articles;
