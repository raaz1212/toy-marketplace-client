import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/LogIn/Login";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import Register from "../components/Registration/Registration";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    ),
    // errorElement: <NotFound />, //error handler
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
