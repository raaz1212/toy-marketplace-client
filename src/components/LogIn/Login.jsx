import React, { useState, useContext } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import the Link component
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext); //signin form AuthProvider

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page", location);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    const from = location.state?.from?.pathname || "/";

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    const from = location.state?.from?.pathname || "/";
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to sign in with Google.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-4">
      <div className="text-center">
        <h2 className="text-4xl mb-4 font-bold">Login to your account</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <hr className="my-4" />
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow  border rounded w-full py-2 px-3 text-white  focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow border rounded w-full py-2 px-3 text-blue-100 mb-3 focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary w-full mb-4"
          onClick={handleEmailSignIn}
        >
          Sign in
        </button>{" "}
        <div className="flex gap-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current me-1 text-blue-800"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            Google login
          </button>
        </div>
      </div>

      <div className="mt-4">
        If you do not have an account, please{" "}
        <Link to="/register" className="text-red-600 underline font-semibold">
          register
        </Link>{" "}
        here.
      </div>
    </div>
  );
};

export default Login;
