import React, { useState } from "react";
import error from "../../assets/err2.jpg";

// 고유한 id값이 없을 경우
// const listArray = ["데이터 1", "데이터 2"];
// 고유한 id값이 있을 경우
const listArray = [
  {
    id: 1,
    value: "데이터 1",
  },
  {
    id: 2,
    value: "데이터 2",
  },
];

const ListAndKeyComponents = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(listArray);

  // 고유한 id값이 없을 경우
  // const addToDoList = () => {
  //   setList((prev) => {
  //     return [value, ...prev];
  //   });
  //   setValue("");
  // };
  // 고유한 id값이 있을 경우
  const addToDoList = () => {
    setList((prev) => {
      return [
        {
          id: list.length + 1 + "", // id값 문자열로 구성하기
          value: value,
        },
        ...prev,
      ];
    });
    setValue("");
  };

  return (
    <div>
      <p>
        고유한 key값이 없다면 list의 모든 항목들이 전체 교체가 되어 성능에 좋지
        않다.
      </p>
      <p>key값이 존재하면 등록된 항목만 교체가 되고 기존 데이터는 남아있다.</p>
      <p>
        여기에서 key값을 index값으로 하는 것은 최대한 지양해야한다. index를
        한다면 key값을 주지 않는 것 처럼 항목들이 전체가 교체되는 문제가
        발생한다.
      </p>
      <p>
        최대한 지양하고 사용한다면 정적인 페이지에서만 사용하고 동적으로
        데이터가 변경된다면 최대한 사용은 자제해야한다.
      </p>
      <p>
        index를 key값으로 줄 경우 list가 가지고 있는 데이터가 index값이
        변경되면서 밀리면서 A라는 LIST에는 A+가 있어야 하는데 새로 추가된
        B항목에 A+가 들어가는 문제가 발생한다.
      </p>
      <p>
        key값에 중복된 key값을 줄수 있는 환경이라면 그것도 문제가 된다. 중복된
        key값을 주면 key가 겹치기 때문에 list의 항목에 error가 발생하는데 아래와
        같은 에러가 발생한다.
      </p>
      <img src={error} alt="secondError" aria-label="두번째 에러" />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addToDoList}>등록</button>
      {/* 테스트 (1) */}
      {/* <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul> */}
      {/* 테스트 (2)*/}
      {/* <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul> */}
      {/* 테스트 (3)*/}
      {/* <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul> */}
      {/* 테스트 (4)*/}
      {/* <ul>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <input />
            </div>
          );
        })}
      </ul> */}
      {/* 테스트 (5)*/}
      {/* <ul>
        {list.map((item) => {
          return (
            <div key={item}>
              <li>{item}</li>
              <input />
            </div>
          );
        })}
      </ul> */}
      {/* 테스트 (6)*/}
      <ul>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.value}</li>
              <input />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListAndKeyComponents;
