import { MainRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
export default function Router() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
