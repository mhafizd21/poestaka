import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layouts } from "../components";
import routes from "./routes";

const BaseRouter = () => {
  const baseRoutes: RouteObject[] = [{
    path: "/",
    element: <Layouts />,
    children: routes,
  }];

  return (
    <RouterProvider router={createBrowserRouter(baseRoutes)}  />
  );
};

export default BaseRouter;