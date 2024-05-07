import { useParams, Link } from "react-router-dom";

const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링 부트를 좋아하는 개발자",
  },
  dba: {
    name: "드루이드상디",
    description: "DBA를 좋아하는 개발자",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
      <Link to="/">홈으로</Link>
    </>
  );
};

export default Profile;
