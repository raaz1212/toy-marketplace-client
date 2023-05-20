import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Register = () => {
  document.title = "DC Toys | Register";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, logOut } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;

    if (password.length < 6) {
      setError("Please enter at least 6 characters for your password.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError("");
        event.target.reset();
        setSuccess("User has been created successfully.");
        updateUserData(result.user, name, photoURL);
        logOut(result.user);
        showSweetAlert();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("User data updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const showSweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Registration Complete",
      text: "Welcome To The New Journey.",
      confirmButtonText: "Alright",
      confirmButtonColor: "#7C3AED",
      allowOutsideClick: false,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-100 to-indigo-100">
      <div className="max-w-md w-full mx-4 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              className="w-full pl-10 pr-4 py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4 relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              className="w-full pl-10 pr-4 py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4 relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              className="w-full pl-10 pr-4 py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              required
            />
          </div>
          <input
            className="w-full mb-4 px-4 py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="url"
            name="photoURL"
            id="photoURL"
            placeholder="Your Profile Picture URL"
          />
          <button
            className="w-full py-3 text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account? Please{" "}
          <Link
            className="text-orange-500 underline font-bold hover:text-red-600 transition-colors duration-300"
            to="/login"
          >
            Log In
          </Link>{" "}
        </p>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4 text-center">{success}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
