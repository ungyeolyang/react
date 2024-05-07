import { useEffect, useState } from "react";
import "./App.css";

const Table = () => {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Tom", age: 28 },
  ];

  const [mapData, setMapData] = useState("");

  useEffect(() => {
    setMapData(data);
  }, []);

  const handleTableRowClick = (e) => {
    console.log(e);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {mapData &&
          mapData.map((item) => (
            // 즉시 실행되지 않고 onClick 이벤트가 발생 했을 때 호출하기 위함, 화살표 함수는 그 자체가 함수이기 때문
            <tr key={item.id} onClick={() => handleTableRowClick(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
