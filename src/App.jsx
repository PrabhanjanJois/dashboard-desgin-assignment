import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import Orders from "./components/Order/Orders";
import Layout from "./components/Layout/Layout";
import ComingSoon from "./components/ComingSoon";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Ecommerce /> },
        { path: "orders", element: <Orders /> },
        { path: "*", element: <ComingSoon /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
