/**
 * @return {react-fragment} Kimdowon 23.09.04.
 * React-Fragment
 * -> <></> = <React.Fragment></React.Fragment>
 * -> 의미없는 div태그들은 줄이자
 * -> 불필요한 태그들을 줄임으로서 css, 개발에 좀 더 안정적으로 가져가자
 */

import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    // <div>
    <React.Fragment>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Outlet />
      <div>
        <Link to="/virtualDom">
          <h2>VirtualDom</h2>
        </Link>
      </div>
      <div>
        <Link to="/listAndKey">
          <h2>ListAndKey</h2>
        </Link>
      </div>
    </React.Fragment>
    //</div>
  );
};

export default App;
