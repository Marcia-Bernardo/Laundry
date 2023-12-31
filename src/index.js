import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavWrapper from "./components/structure/NavbarWrapper";
import MachineListPage from "./pages/MachineListPage";
import UserPage from "./pages/UserPage";

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
        element: <MachineListPage />,
      },
      {
        path: "/listMachine",
        element: <MachineListPage />,
      },
      {
        path: "/balance",
        element: <UserPage />,
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
