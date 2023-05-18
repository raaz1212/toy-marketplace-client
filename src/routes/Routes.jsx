import { createBrowserRouter } from "react-router-dom";
import AddToyPage from "../components/AddToyPage/AddToyPage";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/LogIn/Login";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import Register from "../components/Registration/Registration";
import ToysDetails from "../components/ToysDetails/ToysDetails";

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
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-toys",
        element: <AddToyPage />,
      },
      {
        path: "/toys-details",
        element: <ToysDetails />,
      },
    ],
  },
]);

export default routes;
