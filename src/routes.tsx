import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    //errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home></Home>},
      { path: "shop", element: <Shop></Shop>}
    ]
  },
  //  {
  //    path: "shop",
  //    element: <Shop />,
  //  },
];

export default routes;