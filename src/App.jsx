import "./App.css";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cars } from "./pages/Cars";
import { Catalog } from "./pages/Catalog";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/catalogo", element: <Catalog /> },
  { path: "/auto", element: <Cars /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
