import App from "./App";
import Checkout from "./components/Checkout";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Shop from "./components/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home></Home>},
      { path: "shop/:page", 
        element: <Shop></Shop>
      },
      {path: "checkout", element: <Checkout/>}
    ]
  },
  //  {
  //    path: "shop",
  //    element: <Shop />,
  //  },
];

export default routes;