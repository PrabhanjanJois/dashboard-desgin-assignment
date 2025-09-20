import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Orders from "./components/Order/Orders";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Ecommerce /> },
        { path: "orders", element: <Orders /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
