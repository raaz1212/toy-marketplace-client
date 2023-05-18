import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, logOut } = useContext(AuthContext);

  const handleSubmit = (event) => {
    // 1. prevent page refresh
    event.preventDefault();
    setSuccess("");
    setError("");
    // 2. collect form data
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    console.log(name, email, password, photoURL);

    // validate
    if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    // 3. create user in fb
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("User has been created successfully. Please login again.");
        updateUserData(result.user, name, photoURL);
        // signOut(result.user); // Logout the user
        logOut(result.user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("user data updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="card p-5 shadow-lg bg-white rounded-lg"
        style={{ width: "400px", height: "500px" }}
      >
        <h4 className="text-xl font-bold mb-4">Please Register</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-4 rounded px-2 py-1 bg-lightblue-100"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="w-full mb-4 rounded px-2 py-1 bg-lightblue-100"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <br />
          <input
            className="w-full mb-4 rounded px-2 py-1 bg-lightblue-100"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            required
          />
          <br />
          <input
            className="w-full mb-4 rounded px-2 py-1 bg-lightblue-100"
            type="url"
            name="photoURL"
            id="photoURL"
            placeholder="Your Profile Picture URL"
          />
          <br />
          <button
            className="btn btn-primary bg-orange w-full py-2"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="mt-3">
          <p>
            Already have an account? Please{" "}
            <Link className="text-red-600 underline font-semibold" to="/login">
              Login
            </Link>{" "}
          </p>
        </p>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
      </div>
    </div>
  );
};

export default Register;
