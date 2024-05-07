import { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: ${(props) => props.innerText};
  border: 1px solid gray;
`;

const Box = styled.div`
  background: none;
  width: 400px;
  height: 400px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const Change = () => {
  const [color, setcolor] = useState("White");

  const onChange = (e) => {
    setcolor(e.target.innerText);
  };

  return (
    <>
      <Button onClick={onChange}>Green</Button>
      <Button onClick={onChange}>Orange</Button>
      <Button onClick={onChange}>Purple</Button>
      <Button onClick={onChange}>Blue</Button>
      <Box style={{ backgroundColor: color }}></Box>
    </>
  );
};

export default Change;
