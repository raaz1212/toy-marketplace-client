import React, { useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "./Login.css";

const Login = () => {
  document.title = "DC Toys | LogIn";
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const from = location.state?.from?.pathname || "/";

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        setUser(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    const from = location.state?.from?.pathname || "/";
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        setUser(loggedInUser);
      })
      .catch((error) => {
        setError("Failed to sign in with Google.");
      });
  };

  return (
    <animated.div
      style={fadeAnimation}
      className="flex flex-row justify-center items-center min-h-screen bg-gray-100 py-4 login-bg"
    >
      <div className="flex flex-col justify-center items-center w-1/2 ">
        <h2 className="text-6xl font-bold">Welcome!!!</h2>
        <p className="text-lg mt-4">Please sign in to continue.</p>
      </div>
      <div>
        <animated.div style={fadeAnimation} className="text-center">
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
              className="shadow border rounded w-full py-2 px-3 text-green-700 focus:outline-none focus:shadow-outline zoom-effect"
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
              className="shadow border rounded w-full py-2 px-3 text-blue-400 mb-3 focus:outline-none focus:shadow-outline zoom-effect"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary w-full mb-4 zoom-effect-button"
            onClick={handleEmailSignIn}
          >
            Sign in
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600 zoom-effect-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 12.083 12.083"
                width="29"
                height="29"
              >
                <defs>
                  <path
                    id="a"
                    d="M11.202 5.035H6.042v2.14h2.971c-0.277 1.359 -1.435 2.14 -2.971 2.14C4.229 9.314 2.769 7.854 2.769 6.042S4.229 2.769 6.042 2.769c0.781 0 1.485 0.277 2.039 0.73l1.611 -1.611C8.71 1.032 7.451 0.503 6.042 0.503 2.971 0.503 0.503 2.971 0.503 6.042S2.97 11.58 6.042 11.58c2.769 0 5.286 -2.014 5.286 -5.538 0 -0.327 -0.05 -0.68 -0.126 -1.007z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path
                  clipPath="url(#b)"
                  fill="#FBBC05"
                  d="M0 9.314V2.769L4.279 6.042z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 2.769 4.279 6.042 6.042 4.506l6.042 -0.982V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="m0 9.314 7.552 -5.79 1.989 0.252L12.083 0v12.083H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M12.083 12.083 4.279 6.042 3.272 5.286l8.811 -2.518z"
                />
              </svg>
              Google login
            </button>
          </div>
        </animated.div>

        <div className="mt-4">
          If you do not have an account, please{" "}
          <Link
            to="/register"
            className="text-red-600 underline font-semibold zoom-effect-link"
          >
            register
          </Link>{" "}
          here.
        </div>
      </div>
    </animated.div>
  );
};

export default Login;
