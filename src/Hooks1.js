import { useState } from "react";

const HooksCnt = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <p>현재 카운터 값은 {value} 입니다.</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        빼기
      </button>
    </>
  );
};

export default HooksCnt;
