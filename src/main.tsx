import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

import Commander from "./pages/commander/Commander";
import HomePage from "./pages/HomePage";
import Standard from "./pages/standard/Standard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "standard",
    element: <Standard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "commander",
    element: <Commander />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
