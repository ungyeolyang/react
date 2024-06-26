import { Children, useState } from "react";

const FruitSelect = () => {
  const [value, setValue] = useState("grape");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("선택한 과일 : " + value);
    event.preventDefault(); // 창이 새로고침되는 걸 막음
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요.
        <select onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FruitSelect;
