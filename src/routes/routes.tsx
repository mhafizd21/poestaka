import { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/books/:id",
    element: <Books />
  },
];

export default routes;
