import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Orders from "../pages/Orders";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/orders",
          element: <Orders/>
      },
    ],
  },
]);
export default router;
