import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import VirtualDom from "./component/VirtualDom";
import ListAndKey from "./component/ListAndKey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/virtualDom",
        element: <VirtualDom />,
      },
      {
        path: "/listAndKey",
        element: <ListAndKey />,
      },
    ],
  },
]);
export default router;
