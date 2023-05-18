import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-sky-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 p-2">DC Toys</h1>
        <p className="text-xs">Bring fun for your kids!!!</p>
      </div>
      <nav className="navbar">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-2">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/2YpGGQv/logo.jpg"
              alt=""
              className="w-18 h-8 mr-2"
            />
          </Link>
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } mt-4 block sm:inline-block sm:mt-0 mr-4 text-base font-medium`}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`${
                  location.pathname.startsWith("/blog")
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium`}
              >
                Blogs
              </Link>

              <Link
                to="/toys"
                className={`${
                  location.pathname.startsWith("/toys")
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium`}
              >
                All Toys
              </Link>
              {user && (
                <>
                  <Link
                    to="/my-toys"
                    className={`${
                      location.pathname === "/my-toys"
                        ? "text-blue-500 underline"
                        : "text-blue-700"
                    } block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium`}
                  >
                    My Toys
                  </Link>
                  <Link
                    to="/my-toys"
                    className={`${
                      location.pathname === "/my-toys"
                        ? "text-blue-500 underline"
                        : "text-blue-700"
                    } block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium`}
                  >
                    Add A Toy
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="sm:hidden">
            <button
              className="block ml-auto px-2 py-1 rounded text-blue-700 hover:text-blue-900 focus:outline-none focus:ring"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg viewBox="0 0 100 80" width="10" height="10">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-32 right-0 left-0 z-20 py-2`}
            >
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block px-4 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`${
                  location.pathname.startsWith("/blog")
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block px-4 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>

              <Link
                to="/toys"
                className={`${
                  location.pathname.startsWith("/toys")
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block px-4 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                All Toys
              </Link>
              {user && (
                <>
                  <Link
                    to="/my-toys"
                    className={`${
                      location.pathname === "/my-toys"
                        ? "text-blue-500 underline"
                        : "text-blue-700"
                    } block px-4 py-2 text-base font-medium`}
                    onClick={() => setIsOpen(false)}
                  >
                    My Toys
                  </Link>
                  <Link
                    to="/my-toys"
                    className={`${
                      location.pathname === "/my-toys"
                        ? "text-blue-500 underline"
                        : "text-blue-700"
                    } block px-4 py-2 text-base font-medium`}
                    onClick={() => setIsOpen(false)}
                  >
                    Add A Toy
                  </Link>
                </>
              )}
              {user ? (
                <div className="flex items-center space-x-4 ps-4">
                  <div className="relative">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      title={user.displayName}
                      className="rounded-full w-8 h-8 cursor-pointer"
                    />
                    {user.displayName && (
                      <span className="absolute top-full left-0 right-0 transform translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-lg rounded-md py-2 px-3 text-sm font-medium text-gray-700 z-10">
                        {user.displayName}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm btn-secondary"
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-sm btn-secondary mt-4 sm:mt-0 w-full"
                >
                  LogIn
                </Link>
              )}
            </div>
          </div>

          <div className="hidden sm:block">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName}
                    className="rounded-full w-8 h-8 cursor-pointer"
                  />
                  {user.displayName && (
                    <span className="absolute top-full left-0 right-0 transform translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-lg rounded-md py-2 px-3 text-sm font-medium text-gray-700 z-10">
                      {user.displayName}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm btn-secondary"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-sm btn-secondary">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
