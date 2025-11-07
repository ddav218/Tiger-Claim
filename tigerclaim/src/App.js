import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import SearchPage from "./FrontDev/pages/search/searchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
