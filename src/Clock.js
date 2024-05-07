import { useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <>
      <h1>현재 시간은 {date.toLocaleTimeString()}</h1>
    </>
  );
};

export default Clock;
