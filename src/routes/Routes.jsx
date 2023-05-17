import { createBrowserRouter } from "react-router-dom";
import Login from "../components/LogIn/Login";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Main />
      </>
    ),
    // errorElement: <NotFound />, //error handler
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
