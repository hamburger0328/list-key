/**
 * @return {ListAndKey} Kimdowon 23.09.04.
 */
import React from "react";
import error from "../assets/error.jpg";
import ListAndKeyComponents from "./detail/ListAndKeyComponents";

const ListAndKey = () => {
  return (
    <div>
      <h3>List와 Key</h3>
      <img src={error} alt="key error msg" aria-label="errorMessage" />
      <p>
        고유한 key값이 없을 경우 상기와 같은 에러가 발생한다. 해당 에러를
        해결하기 위해서는 list마다 각 고유한 값이 존재해야 디버깅을 방지할 수
        있다
      </p>
      <ListAndKeyComponents />
    </div>
  );
};

export default ListAndKey;
