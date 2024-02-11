import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserDetails from "../pages/Users/UserDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users/:id",
    element: <UserDetails />,
    loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
  },
]);

export default Router;
