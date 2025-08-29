import "./App.css";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
