/**
 * @return {react-fragment} Kimdowon 23.09.04.
 * React-Fragment
 * -> <></> = <React.Fragment></React.Fragment>
 * -> 의미없는 div태그들은 줄이자
 * -> 불필요한 태그들을 줄임으로서 css, 개발에 좀 더 안정적으로 가져가자
 */

import React from "react";
import Index from "./component/Index";

const App = () => {
  return (
    // <div>
    <React.Fragment>
      <h1>Main입니다</h1>
      <p>home</p>
      <Index />
    </React.Fragment>
    //</div>
  );
};

export default App;
