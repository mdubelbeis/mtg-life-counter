import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

import { store } from "./app/store";
import { Provider } from "react-redux";

import Commander from "./pages/commander";
import HomePage from "./pages/HomePage";
import Standard from "./pages/standard/Standard";
import OneVOne from "./pages/commander/OneVOne";
import ThreePlayers from "./pages/commander/ThreePlayers";
import FourPlayers from "./pages/commander/FourPlayers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  {
    path: "commander/two-players",
    element: <OneVOne />,
    errorElement: <ErrorPage />,
  },
  {
    path: "commander/three-players",
    element: <ThreePlayers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "commander/four-players",
    element: <FourPlayers />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
