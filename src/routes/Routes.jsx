import { createBrowserRouter } from "react-router-dom";
import AddToyPage from "../components/AddToyPage/AddToyPage";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/LogIn/Login";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import Register from "../components/Registration/Registration";
import ToysDetails from "../components/ToysDetails/ToysDetails";
import PrivateRoute from "./PrivateRoutes";

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
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToysDetails />
          </PrivateRoute>
        ),
        // loader: ({ params }) => fetch(`http://localhost:5000/toys/{params.id}`),
      },
    ],
  },
]);

export default routes;
