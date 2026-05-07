import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Thanks from "./pages/Thanks";
import Favorites from "./pages/Favorites";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "thanks", element: <Thanks /> },
      { path: "favorite", element: <Favorites /> },
      { path: "category/:categoryId", element: <Category /> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
