import { useRoutes } from "react-router-dom";
import { Dashboard } from "@/pages/dashboard";
import { Map } from "@/pages/map";
import Pages from "@/pages";

export function MainRoutes() {

  const elements = useRoutes([
    {
      path: "/",
      
      element: <Pages />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/map",
      element: <Map />,
    },
  ]);

  return elements;
}
