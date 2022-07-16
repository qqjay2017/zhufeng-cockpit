import Pages from "@/pages";
import Home from "@/pages/home";
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Tip from "../Tip";

function Route() {
  const element = useRoutes([
    {
      path: "/",
      element: <Pages />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
            path: "/tip",
            element: <Tip />,
          },
      ],
    },
  ]);
  return element;
}

export default Route;
