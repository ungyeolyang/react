const User = (props) => {
  return (
    <>
      <b> {props.user.userName}</b>
      <span>{props.user.email}</span>
    </>
  );
};

function UserList() {
  const users = [
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gmial.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];
  return <>{users && users.map((e) => <User key={e.id} user={e} />)}</>;
}
export default UserList;
