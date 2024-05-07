const Mycomponent = (props) => {
  return (
    <>
      <p>안녕하세요,제이름은 {props.name} 이고</p>
      <p>나이는 {props.age} 입니다.</p>
      <p>여기는 {props.children}</p>
    </>
  );
};

Mycomponent.defaultProps = {
  name: "김웅열",
  age: 28,
};

export default Mycomponent;
