import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavWrapper from "./components/structure/NavbarWrapper";
import ChosenMachine from "./components/ChosenMachine";
import ManagerPage from "./pages/ManagerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavWrapper />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },

      {
        path: "/listMachine",
        element: <ManagerPage showPage="list" />,
      },
      {
        path: "/user",
        element: <ManagerPage showPage="balance" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <NavBar /> */}</RouterProvider>
  </React.StrictMode>
);
