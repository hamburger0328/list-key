/**
 * @return {react-fragment} Kimdowon 23.09.04.
 * React-Fragment
 * -> <></> = <React.Fragment></React.Fragment>
 * -> 의미없는 div태그들은 줄이자
 * -> 불필요한 태그들을 줄임으로서 css, 개발에 좀 더 안정적으로 가져가자
 */

import React from "react";
import Index from "./component/Index";
import VirtualDom from "./component/VirtualDom";

const App = () => {
  return (
    // <div>
    <React.Fragment>
      <div>
        <h1>React.Fragment</h1>
        <Index />
      </div>
      <div>
        <h1>VirtualDom</h1>
        <VirtualDom />
      </div>
    </React.Fragment>
    //</div>
  );
};

export default App;
