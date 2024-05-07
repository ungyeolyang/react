import { useEffect, useRef, useState } from "react";

function ExComponent() {
  const myButtonRef = useRef(null);
  console.log("랜더링했습니다.");

  useEffect(() => {
    if (myButtonRef.current) {
      myButtonRef.current.innerText = "클릭하세요!";
    }
  }, []);

  const [count, setCount] = useState(0);
  // const count = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    // count.current += 1;
    alert(`클릭 횟수: ${count}`);
  };

  return (
    <div>
      <button ref={myButtonRef} onClick={handleClick}>
        초기 상태
      </button>
    </div>
  );
}

export default ExComponent;
