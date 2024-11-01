import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import PlaceOrder from "../pages/PlaceOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/cart",
          element: <Cart/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/collection",
        element: <Collection/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/placeorder",
        element: <PlaceOrder/>
      }
    ],
  },
]);
export default router;
