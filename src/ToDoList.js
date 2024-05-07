import { useEffect, useState } from "react";

const ToDoList = () => {
  const [names, setNames] = useState(() => {
    const storedNames = localStorage.getItem("names");
    return storedNames
      ? JSON.parse(storedNames)
      : [
          { id: 1, text: "HTML 연습" },
          { id: 2, text: "CSS 복습" },
          { id: 3, text: "javascript 이해" },
          { id: 4, text: "리엑트 예습" },
        ];
  });

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해준다
    setNames(nextNames);
    setInputText(""); // inputText를 비운다.
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((e) => (
    <li
      key={e.id}
      onContextMenu={(event) => {
        event.preventDefault();
        onRemove(e.id);
      }}
    >
      {e.text}
    </li>
  ));

  return (
    <>
      <input onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default ToDoList;
