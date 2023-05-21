import { createBrowserRouter } from "react-router-dom";
import AddToyPage from "../components/AddToyPage/AddToyPage";
import AllToysPage from "../components/AllToys/AllToys";
import BlogPage from "../components/BlogPage/BlogPage";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/LogIn/Login";
import Main from "../components/Main/Main";
import MyToysPage from "../components/MyToys/MyToys";
import Navbar from "../components/Navbar/Navbar";
import ErrorPage from "../components/NotFound/NotFound";
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
    errorElement: <ErrorPage />, //error handler
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://toy-store-server-pied.vercel.app/toys"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "//my-toys",
        element: (
          <PrivateRoute>
            <MyToysPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toys",
        element: (
          <PrivateRoute>
            <AddToyPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToysDetails />
          </PrivateRoute>
        ),
        // loader: ({ params }) => fetch(`https://toy-store-server-pied.vercel.app/toys/{params.id}`),
      },
      {
        path: "/toys",
        element: <AllToysPage />,
      },
    ],
  },
]);

export default routes;
